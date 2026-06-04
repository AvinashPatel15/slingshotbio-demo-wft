import { productStepLabels } from "../../content/shop-controls";
import { productSteps } from "../../content/homepage";
import type { ProductStep } from "../../content/types";

export function ShopControlsTabs({
  activeStepId,
  setActiveStepId,
}: {
  activeStepId: ProductStep["id"];
  setActiveStepId: (id: ProductStep["id"]) => void;
}) {
  return (
    <div className="product-tabs" role="tablist" aria-label="Product workflow steps">
      {productSteps.map((step) => (
        <button
          key={step.id}
          type="button"
          className={`product-tab${activeStepId === step.id ? " product-tab--active" : ""}`}
          role="tab"
          aria-selected={activeStepId === step.id}
          aria-controls={`products-${step.id}`}
          id={`tab-${step.id}`}
          onClick={() => setActiveStepId(step.id)}
        >
          <span>
            <strong>
              <span>{productStepLabels[step.id][0]}</span>
              <span>{productStepLabels[step.id][1]}</span>
            </strong>
          </span>
        </button>
      ))}
    </div>
  );
}
