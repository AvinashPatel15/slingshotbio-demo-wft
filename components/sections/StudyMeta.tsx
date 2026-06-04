import { studyMetaItems } from "../../content/homepage";

export function StudyMeta() {
  return (
    <div className="study-meta" aria-label="Study context">
      {studyMetaItems.map((item) => (
        <div key={item.text} className="study-meta__item">
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
