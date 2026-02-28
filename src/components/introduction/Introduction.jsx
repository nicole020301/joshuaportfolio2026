import person from "/JoshPicChibi.png";
import "./introduction.css";

const skillTags = [
  "Aerospace Systems",
  "CAD Design",
  "R&D",
  "Systems Engineering",
  "Flight Dynamics",
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "GitHub",   href: "#", icon: "gh" },
  { label: "Email",    href: "mailto:josh.dellamas1120@gmail.com", icon: "@" },
];

const floatStats = [
  // { value: "15+", label: "Years Exp.",   cls: "float-stat-0" },
  // { value: "50+", label: "Projects",     cls: "float-stat-1" },
  // { value: "30+", label: "Publications", cls: "float-stat-2" },
];

const Introduction = () => {
  return (
    <section className="intro-section" id="introduction">
      {/* Aurora decorative layer */}
      <div className="intro-aurora" />

      <div className="relative z-10 flex max-lg:flex-col-reverse sm:justify-between items-center gap-16 lg:gap-24 py-24 lg:py-32 px-6 max-xxl:px-8 xxl:max-w-[1320px] xxl:mx-auto">

        {/*  LEFT: text column  */}
        <div className="w-full flex flex-col max-lg:items-center gap-7">

          {/* Status badge */}
          <div className="animate-fade-up">
            <span className="scroll-badge">
              <span className="scroll-badge-dot" />
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <div className="animate-fade-up delay-100 max-lg:text-center">
            <p className="text-gray-500 text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="intro-gradient-text font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
              Joshua<br />De Llamas
            </h1>
          </div>

          {/* Role with decorative line */}
          <div className="animate-fade-up delay-150 flex items-center gap-4 max-lg:justify-center">
            <span className="intro-role-line" />
            <p className="intro-role-text">
              Aerospace Engineer<span className="intro-cursor">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="animate-fade-up delay-200 text-gray-400 text-base leading-relaxed max-w-lg max-lg:text-center">
            Dedicated to pushing the boundaries of{" "}
            <span className="bg-highlight">aerospace innovation</span> through
            precision engineering and{" "}
            <span className="bg-highlight">cutting-edge design</span>.
            Building high-performance systems that redefine what is possible.
          </p>

          {/* Skill tags */}
          <div className="animate-fade-up delay-250 flex flex-wrap gap-2 max-lg:justify-center">
            {skillTags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 max-lg:justify-center">
            <a className="btn-hero" href="mailto:example@gmail.com">
              <span>Say Hello</span>
              <span className="btn-hero-icon"></span>
            </a>
            <a className="btn-ghost" href="/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div>

          {/* Divider + socials */}
          <div className="animate-fade-up delay-400 flex items-center gap-4 max-lg:justify-center">
            <span className="text-gray-600 text-[10px] tracking-[0.25em] uppercase font-medium">Follow</span>
            <div className="h-px w-8 bg-gray-800" />
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="social-pill" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

        </div>

        {/*  RIGHT: profile image + floating cards  */}
        <div className="animate-fade-up delay-500 relative max-w-[380px] w-full max-lg:mx-auto shrink-0 mx-8 lg:mx-14">

          {/* Floating stat cards */}
          {floatStats.map((s) => (
            <div key={s.cls} className={`float-stat ${s.cls}`}>
              <span className="float-stat-value">{s.value}</span>
              <span className="float-stat-label">{s.label}</span>
            </div>
          ))}

          {/* Decorative background ring */}
          <div className="profile-outer-ring" />

          {/* Image with animated glow border */}
          <div className="profile-glow-ring aspect-[4/5]">
            <img src={person} alt="Joshua De Llamas" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Introduction;
