import { relatedResources } from "../../content/homepage";
import { ArrowRightIcon } from "../ui/icons";

export function RelatedResourcesSection() {
  return (
    <section className="section section--muted related-resources-section">
      <div className="frame related-resources-frame">
        <div className="related-resources-heading reveal">
          <div className="related-resources-heading__title-row">
            <div>
              <p className="eyebrow">Related Resources</p>
              <h2 className="text-heading-lg">Explore our protocols, application notes, and walkthroughs.</h2>
            </div>
            <a
              className="btn btn--secondary btn--md related-resources-heading__cta"
              href="https://www.slingshotbio.com/resources"
              target="_blank"
              rel="noreferrer"
            >
              View All Resources
            </a>
          </div>
        </div>

        <div className="related-resources-grid reveal reveal--delay-1">
          {relatedResources.map((resource) => (
            <article key={resource.title} className="card resource-card">
              <div className="resource-card__media" aria-hidden="true">
                <img src={resource.imageSrc} alt="" loading="lazy" />
              </div>
              <div className="resource-card__body">
                <div className="resource-card__meta">
                  <span>{resource.kind}</span>
                </div>
                <h3>
                  <a href={resource.href} target="_blank" rel="noreferrer">
                    {resource.title}
                  </a>
                </h3>
                <div className="resource-card__divider" aria-hidden="true" />
                <div className="resource-card__footer">
                  <a className="resource-card__link" href={resource.href} target="_blank" rel="noreferrer">
                    {resource.cta}
                    <ArrowRightIcon />
                  </a>
                  <span className="resource-card__time">{resource.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
