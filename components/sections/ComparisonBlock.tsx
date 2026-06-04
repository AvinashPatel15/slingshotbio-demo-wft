import { comparisonColumns } from "../../content/homepage";
import { StudyMeta } from "./StudyMeta";

export function ComparisonBlock() {
  return (
    <div className="comparison-block-wrap">
      <div className="comparison-block-intro">
        <h3>Biological Controls vs Synthetic Cell Mimics</h3>
        <StudyMeta />
      </div>

      <div className="comparison-block" aria-label="Biological controls and TBNK Mimic comparison">
        {comparisonColumns.map((column) => (
          <article key={column.title} className={`comparison-card comparison-card--${column.variant}`}>
            <div className="comparison-card__header">
              <h3>{column.title}</h3>
              <p>{column.description}</p>
            </div>

            <div className="comparison-card__items">
              {column.items.map((item) => (
                <div key={item.title} className="comparison-item">
                  <span className="comparison-item__rule" aria-hidden="true" />
                  <p>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
