const sendSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Form = () => {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="contact-input"
          required
        />
        <input
          type="email"
          placeholder="Your Email *"
          className="contact-input"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Company / Institution"
        className="contact-input"
      />
      <input
        type="text"
        placeholder="Subject *"
        className="contact-input"
        required
      />
      <textarea
        placeholder="Your Message *"
        className="contact-input contact-textarea"
        required
      />
      <div>
        <button type="submit" className="contact-submit">
          <span>Send Message</span>
          {sendSVG}
        </button>
      </div>
    </form>
  );
};

export default Form;
