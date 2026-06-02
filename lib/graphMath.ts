export type GraphMode = "noisy" | "stable" | "noisy-full" | "stable-full";

export type GraphSeries = {
  label: string;
  color: string;
  y: number;
  phase: number;
  amplitude: number;
};

export const graphSeries = [
  { label: "B Cells", color: "#3795ff", y: 118, phase: 0.2, amplitude: 96 },
  { label: "CD4+ T Cells", color: "#37eaff", y: 168, phase: 1.1, amplitude: 62 },
  { label: "CD8+ T Cells", color: "#ffa600", y: 222, phase: 2.4, amplitude: 86 },
  { label: "Lymphocytes", color: "#3bbc71", y: 330, phase: 3.2, amplitude: 112 },
  { label: "Monocytes", color: "#de7164", y: 424, phase: 4.1, amplitude: 78 },
  { label: "NK Cells", color: "#5daee0", y: 525, phase: 5.3, amplitude: 38 },
] as const satisfies readonly GraphSeries[];

export const graphViewBox = {
  width: 1024,
  height: 605,
  labelTop: 28,
  minSplit: 0.3,
  maxSplit: 0.7,
} as const;

export const graphStaticTime = 0.64;

export const graphYAxisLabels = ["100%", "75%", "50%", "25%", "0%"] as const;

export const graphXAxisLabels = ["1", "5", "10", "15", "20", "25", "instruments"] as const;

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getGraphPoint(
  series: GraphSeries,
  index: number,
  mode: GraphMode,
  splitX: number,
  time: number,
  progress: number,
) {
  const startX = mode === "stable" ? splitX : -8;
  const endX = mode === "noisy" ? splitX : graphViewBox.width + 8;
  const width = endX - startX;
  const x = startX + width * progress;
  const local = progress + index * 0.091;

  const noisyWave =
    Math.sin(local * Math.PI * 5.4 + time * (1.2 + index * 0.11) + series.phase) *
      series.amplitude *
      0.48 +
    Math.cos(local * Math.PI * 9.2 - time * (1.65 + index * 0.09) + series.phase) *
      series.amplitude *
      0.32 +
    Math.sin(local * Math.PI * 17 + time * 2.4 + series.phase * 1.7) *
      series.amplitude *
      0.18;

  const spike =
    Math.pow(
      Math.max(
        0,
        Math.sin(local * Math.PI * (7 + index * 0.6) + time * 2.8 + series.phase),
      ),
      5,
    ) *
    series.amplitude *
    (index % 2 === 0 ? -0.85 : 0.7);

  const stableWave =
    Math.sin(local * Math.PI * 2.2 + time * 0.16 + series.phase) * 8 +
    Math.cos(local * Math.PI * 4.1 - time * 0.1 + series.phase) * 4;

  const stableDrift =
    Math.sin(local * Math.PI * 0.95 + time * 0.08 + series.phase * 0.7) * 3.2;

  const stableBumpCenter = index === 3 ? 0.67 : 0.54 + index * 0.023;

  const stableBump =
    Math.exp(-Math.pow(progress - stableBumpCenter, 2) / 0.0026) *
    (index === 3 ? -62 : index === 5 ? -20 : index === 0 ? 12 : 0);

  const y = clamp(
    series.y +
      (mode === "noisy" || mode === "noisy-full"
        ? noisyWave + spike
        : stableWave + stableDrift + stableBump),
    46,
    graphViewBox.height - 54,
  );

  return { x, y };
}

export function buildAnimatedPath(
  series: GraphSeries,
  index: number,
  mode: GraphMode,
  splitX: number,
  time: number,
) {
  const points = mode === "noisy" || mode === "noisy-full" ? 18 : 13;
  const commands: string[] = [];

  for (let pointIndex = 0; pointIndex < points; pointIndex += 1) {
    const progress = pointIndex / (points - 1);
    const { x, y } = getGraphPoint(series, index, mode, splitX, time, progress);
    commands.push(`${pointIndex === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return commands.join(" ");
}

function getGraphSeriesPoints(
  series: GraphSeries,
  index: number,
  mode: GraphMode,
  splitX: number,
  time: number,
) {
  const points = mode === "noisy" || mode === "noisy-full" ? 18 : 13;
  const graphPoints: Array<{ x: number; y: number; progress: number }> = [];

  for (let pointIndex = 0; pointIndex < points; pointIndex += 1) {
    const progress = pointIndex / (points - 1);
    const point = getGraphPoint(series, index, mode, splitX, time, progress);
    graphPoints.push({ ...point, progress });
  }

  return graphPoints;
}

export function getTargetPeakPoint(
  series: GraphSeries,
  index: number,
  splitX: number,
  time: number,
) {
  const targetCenter = 0.54 + index * 0.023;
  const targetRadius = 0.085;
  const stablePoints = getGraphSeriesPoints(series, index, "stable-full", splitX, time).filter(
    (point) =>
      point.progress >= targetCenter - targetRadius &&
      point.progress <= targetCenter + targetRadius,
  );
  let peakPoint = stablePoints[0];

  for (const candidate of stablePoints) {
    if (candidate.y < peakPoint.y) {
      peakPoint = candidate;
    }
  }

  return peakPoint;
}
