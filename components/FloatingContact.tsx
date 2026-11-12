import ChatAssistant from "./ChatAssistant";

/** Floating Chat and Call buttons, with the chat assistant panel. Rendered outside .ab so position: fixed follows the screen. */
export default function FloatingContact() {
  return (
    <div className="fab" id="fab" role="group" aria-label="Contact Auzbright">
      <div className="chat-panel" id="chat-panel" role="dialog" aria-labelledby="chat-panel-h" hidden>
        <div className="cp-head">
          <div>
            <p className="cp-k">
              <span className="cp-dot" aria-hidden="true" />
              Auzbright
              <span className="ca-demo">Demo</span>
            </p>
            <h2 id="chat-panel-h">Auzbright Assistant</h2>
          </div>
          <button type="button" className="cp-close" aria-label="Close" data-onclick="chatClose">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ChatAssistant />
      </div>
      <button
        type="button"
        className="fab-btn fab-chat"
        aria-expanded="false"
        aria-controls="chat-panel"
        data-onclick="chatToggle"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.2A8.5 8.5 0 1 1 21 12Z M8.5 11h.01 M12 11h.01 M15.5 11h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="fab-label">Chat with us</span>
      </button>{" "}
      <a className="fab-btn fab-call" href="tel:0386095195" aria-label="Call Auzbright on 03 8609 5195">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="fab-label">03 8609 5195</span>
      </a>
    </div>
  );
}
