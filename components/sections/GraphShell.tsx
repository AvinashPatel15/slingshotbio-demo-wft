"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  buildAnimatedPath,
  clamp,
  getTargetPeakPoint,
  graphSeries,
  graphStaticTime,
  graphViewBox,
  graphXAxisLabels,
  graphYAxisLabels,
  type GraphSeries,
} from "../../lib/graphMath";

export function GraphShell() {
  const graphRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef(false);
  const [split, setSplit] = useState(0.47);
  const [isErrorHovered, setIsErrorHovered] = useState(false);
  const [hoveredSeries, setHoveredSeries] = useState<{
    label: string;
    color: string;
    x: number;
    y: number;
  } | null>(null);
  const clipId = useId().replace(/:/g, "");
  const splitX = split * graphViewBox.width;
  const techErrorPoint = getTargetPeakPoint(graphSeries[3], 3, splitX, graphStaticTime);
  const techErrorProgress = techErrorPoint.x / graphViewBox.width;
  const isErrorMarkerHidden = split >= techErrorProgress - 0.01;

  const updateSplitFromClientX = (clientX: number) => {
    const graph = graphRef.current;

    if (!graph) {
      return;
    }

    const rect = graph.getBoundingClientRect();
    const nextSplit = (clientX - rect.left) / rect.width;
    setSplit(clamp(nextSplit, graphViewBox.minSplit, graphViewBox.maxSplit));
  };

  const updateTooltipFromClientPoint = (
    clientX: number,
    clientY: number,
    series: GraphSeries,
  ) => {
    const graph = graphRef.current;

    if (!graph) {
      return;
    }

    const rect = graph.getBoundingClientRect();
    const x = clamp(((clientX - rect.left) / rect.width) * 100, 4, 96);
    const y = clamp(((clientY - rect.top) / rect.height) * 100, 8, 92);

    setHoveredSeries({
      label: series.label,
      color: series.color,
      x,
      y,
    });
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!dragRef.current) {
        return;
      }

      updateSplitFromClientX(event.clientX);
    };

    const handlePointerUp = () => {
      dragRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    if (isErrorMarkerHidden && isErrorHovered) {
      setIsErrorHovered(false);
    }
  }, [isErrorHovered, isErrorMarkerHidden]);

  return (
    <div
      ref={graphRef}
      className="graph-card"
      aria-label="Interactive comparison graph showing noisy biological controls and stable Slingshot mimics"
    >
      <div className="graph-copy graph-copy--left" style={{ left: `${split * 100}%` }} aria-hidden="true">
        <strong>Biological controls</strong>
        <span>Variable, noisy, inconsistent</span>
      </div>

      <div className="graph-copy graph-copy--right" style={{ left: `${split * 100}%` }} aria-hidden="true">
        <strong>Slingshot mimics</strong>
        <span>Stable, precise, reproducible</span>
      </div>

      <svg
        className="graph-svg"
        viewBox={`0 0 ${graphViewBox.width} ${graphViewBox.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={`${clipId}-left`}>
            <rect x="0" y="0" width={splitX} height={graphViewBox.height} />
          </clipPath>
          <clipPath id={`${clipId}-right`}>
            <rect x={splitX} y="0" width={graphViewBox.width - splitX} height={graphViewBox.height} />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId}-left)`}>
          {graphSeries.map((series, index) => (
            <g key={`noisy-${series.label}`}>
              <path
                d={buildAnimatedPath(series, index, "noisy-full", splitX, graphStaticTime)}
                fill="none"
                stroke={series.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <path
                className="graph-hit-path"
                d={buildAnimatedPath(series, index, "noisy-full", splitX, graphStaticTime)}
                fill="none"
                stroke="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                onPointerEnter={(event) =>
                  updateTooltipFromClientPoint(event.clientX, event.clientY, series)
                }
                onPointerMove={(event) =>
                  updateTooltipFromClientPoint(event.clientX, event.clientY, series)
                }
                onPointerLeave={() => setHoveredSeries(null)}
              />
            </g>
          ))}
        </g>

        <g clipPath={`url(#${clipId}-right)`}>
          {graphSeries.map((series, index) => (
            <g key={`stable-${series.label}`}>
              <path
                d={buildAnimatedPath(series, index, "stable-full", splitX, graphStaticTime)}
                fill="none"
                stroke={series.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <path
                className="graph-hit-path"
                d={buildAnimatedPath(series, index, "stable-full", splitX, graphStaticTime)}
                fill="none"
                stroke="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                onPointerEnter={(event) =>
                  updateTooltipFromClientPoint(event.clientX, event.clientY, series)
                }
                onPointerMove={(event) =>
                  updateTooltipFromClientPoint(event.clientX, event.clientY, series)
                }
                onPointerLeave={() => setHoveredSeries(null)}
              />
            </g>
          ))}
        </g>
      </svg>

      <div className="graph-series-labels" aria-hidden="true">
        {hoveredSeries ? (
          <span
            className="graph-series-label graph-series-label--tooltip"
            style={{
              backgroundColor: hoveredSeries.color,
              left: `${hoveredSeries.x}%`,
              top: `${hoveredSeries.y}%`,
            }}
          >
            {hoveredSeries.label}
          </span>
        ) : null}
      </div>

      <div className="graph-annotation-layer">
        <div
          className={`graph-annotation${isErrorMarkerHidden ? " graph-annotation--hidden" : ""}`}
          style={{
            left: `${techErrorProgress * 100}%`,
            top: `${(techErrorPoint.y / graphViewBox.height) * 100}%`,
          }}
          onPointerEnter={() => setIsErrorHovered(true)}
          onPointerLeave={() => setIsErrorHovered(false)}
        >
          <span className="graph-annotation__dot" />
          <span className="graph-annotation__label">Tech Error Detected</span>
          {isErrorHovered && !isErrorMarkerHidden ? (
            <span className="graph-annotation__popover">
              <span className="graph-annotation__popover-index">Instrument #21</span>
              <span className="graph-annotation__popover-title">Elevated lymphocyte count</span>
              <span className="graph-annotation__popover-copy">Outside expected variance range</span>
            </span>
          ) : null}
        </div>
      </div>

      <div className="graph-axis graph-axis--y" aria-hidden="true">
        {graphYAxisLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="graph-axis graph-axis--x" aria-hidden="true">
        {graphXAxisLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="graph-divider" aria-hidden="true">
        <span style={{ left: `${split * 100}%` }} />
      </div>

      <button
        type="button"
        className="graph-divider-control"
        style={{ left: `${split * 100}%` }}
        aria-label="Drag comparison divider"
        onPointerDown={(event) => {
          if (event.button !== 0) {
            return;
          }

          event.stopPropagation();
          dragRef.current = true;
          updateSplitFromClientX(event.clientX);
        }}
      />

      <button
        type="button"
        className="graph-handle"
        style={{ left: `${split * 100}%` }}
        aria-label="Drag to compare biological controls and Slingshot mimics"
        aria-valuemin={Math.round(graphViewBox.minSplit * 100)}
        aria-valuemax={Math.round(graphViewBox.maxSplit * 100)}
        aria-valuenow={Math.round(split * 100)}
        role="slider"
        onPointerDown={(event) => {
          event.stopPropagation();
          dragRef.current = true;
          updateSplitFromClientX(event.clientX);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setSplit((current) => clamp(current - 0.025, graphViewBox.minSplit, graphViewBox.maxSplit));
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            setSplit((current) => clamp(current + 0.025, graphViewBox.minSplit, graphViewBox.maxSplit));
          }
        }}
      >
        <span />
        <span />
      </button>
    </div>
  );
}
