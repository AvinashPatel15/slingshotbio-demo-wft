export function BookMeeting() {
  return (
    <div className="meeting-bridge">
      <div className="meeting-bridge__row">
        <img
          className="meeting-bridge__icon"
          src="/assets/book-a-meeting-2.png"
          alt=""
          aria-hidden="true"
          width={173}
          height={114}
          loading="lazy"
        />
        <div className="meeting-bridge__lead">
          <p>
            <span>Want to learn about how cell mimics</span>
            <span>can fit into your flow cytometry workflow?</span>
          </p>
        </div>
        <span className="meeting-bridge__divider" aria-hidden="true" />
        <a className="meeting-bridge__button" href="/contact">
          <span>Book a Meeting</span>
        </a>
      </div>
    </div>
  );
}
