const techStack = ["React", "Vite", "Tailwind CSS", "DaisyUI"];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* Accent bar */}
      <div className="footer-accent-bar" />

      {/* Single row */}
      <div className="content max-2xl:px-3 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 py-4 pr-14 sm:pr-16">
        {/* Copyright */}
        <p className="footer-copy-text">
          &copy; {copyrightYear} Joshua De Llamas&nbsp;&middot;&nbsp;Aerospace Engineer&nbsp;&middot;&nbsp;All rights reserved.
        </p>

        {/* Built with */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="footer-built-label">Built with</span>
          {techStack.map((tech) => (
            <span key={tech} className="footer-tech-pill">{tech}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
