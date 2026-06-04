import type { ProductStep } from "../../content/types";
import { productSteps } from "../../content/homepage";

export function ShopControlsGrid({
  activeStepId,
  selectedSizes,
  setSelectedSizes,
}: {
  activeStepId: ProductStep["id"];
  selectedSizes: Record<string, string>;
  setSelectedSizes: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) {
  const activeStep = productSteps.find((step) => step.id === activeStepId) ?? productSteps[0];

  return (
    <div
      className="product-grid"
      id={`products-${activeStep.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${activeStep.id}`}
    >
      {activeStep.products.map((product) => (
        <article key={`${activeStep.id}-${product.name}`} className="card product-card">
          <div className="product-card__media">
            <img
              src={product.imageSrc}
              alt={`${product.name} product packaging`}
              width={350}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="product-card__body">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-card__meta">
              <strong>{product.price}</strong>
              {product.sizeOptions?.length ? (
                <label className="product-card__select-wrap">
                  <select
                    className="product-card__select"
                    value={selectedSizes[product.name] ?? product.sizeOptions[0]}
                    onChange={(event) =>
                      setSelectedSizes((current) => ({
                        ...current,
                        [product.name]: event.target.value,
                      }))
                    }
                    aria-label={`Select test quantity for ${product.name}`}
                  >
                    {product.sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              ) : null}
            </div>
          </div>
          <div className="product-card__actions">
            <a className="btn btn--primary btn--md btn--full" href={product.href} target="_blank" rel="noreferrer">
              Add to Cart
            </a>
            <a className="btn btn--secondary btn--md btn--full" href={product.href} target="_blank" rel="noreferrer">
              Learn more
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
