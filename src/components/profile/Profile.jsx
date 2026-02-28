import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faEnvelope,
  faWind,
  faGears,
  faDraftingCompass,
  faSatellite,
  faScrewdriverWrench,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./profile.css";

const tools = [
  "MATLAB / Simulink",
  "ANSYS",
  "SolidWorks",
  "AutoCAD",
  "Python",
  "OpenFOAM",
];

const services = [
  {
    icon: faWind,
    title: "Aerodynamics & CFD",
    desc: "Simulating airflow and aerodynamic forces using computational fluid dynamics tools.",
  },
  {
    icon: faGears,
    title: "Structural Analysis",
    desc: "Evaluating structural integrity of aerospace components under real-world loads.",
  },
  {
    icon: faDraftingCompass,
    title: "CAD Design",
    desc: "Producing precise 3D models and technical drawings for aerospace systems.",
  },
  {
    icon: faSatellite,
    title: "Systems Engineering",
    desc: "Integrating subsystems and applying engineering principles across the full lifecycle.",
  },
];

const stats = [
  { value: "10+",  label: "Projects"        },
  { value: "1",    label: "Internships"     },
  { value: "5+",   label: "Certifications", wide: true },
];

const socials = [
  { icon: faLinkedin,  href: "#", label: "LinkedIn"  },
  { icon: faGithub,    href: "#", label: "GitHub"    },
  { icon: faInstagram, href: "#", label: "Instagram" },
  { icon: faXTwitter,  href: "#", label: "X"         },
];

const Profile = () => {
  return (
    <div className="profile-card" id="profile">
      <div className="profile-card-inner flex max-md:flex-col justify-between items-stretch gap-12 xl:p-20 lg:p-14 md:p-12 sm:p-10 p-6">

        {/*  LEFT: image + social dock  */}
        <div className="profile-img-wrapper w-full max-w-[300px] max-md:max-w-[260px] flex-shrink-0 flex flex-col justify-center">
          <div className="profile-img-halo" />
          <div className="profile-img-glow">
            <img src={person} alt="Joshua De Llamas" style={{ height: "400px", width: "300px" }} />
          </div>

          {/* Social dock */}
          <div className="profile-social-dock">
            <div className="profile-social-inner">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="profile-social-link" aria-label={s.label}>
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/*  RIGHT: content  */}
        <div className="flex flex-col justify-between gap-8 max-md:items-center max-md:text-center flex-1">

          {/* Heading */}
          <div className="profile-fade">
            <h2 className="profile-heading text-4xl sm:text-5xl lg:text-6xl mb-4">
              About Me
            </h2>
            <div className="profile-divider max-md:mx-auto" />
          </div>

          {/* Description */}
          <div className="profile-fade profile-d1 text-gray-400 text-sm sm:text-base leading-loose space-y-4 text-justify w-full">
            <p>
              A <span className="text-purple-300 font-medium">fresh graduate in Aerospace Engineering</span>, driven by a passion for flight mechanics, propulsion systems, and the science behind making things fly.
            </p>
            <p>
              Throughout my degree I worked on hands-on academic projects spanning <span className="text-purple-300 font-medium">aerodynamic simulation, structural analysis, and CAD design</span> — always bridging theory with practical engineering solutions.
            </p>
            <p>
              I'm eager to contribute to real-world aerospace challenges and grow within a team that values <span className="text-purple-300 font-medium">precision, innovation, and ambition</span>.
            </p>
          </div>

          {/* What I Do + Tools/Stats/CTAs side by side */}
          <div className="profile-fade profile-d2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

            {/* LEFT of sub-grid: Areas of Expertise */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-3 max-md:text-center">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2 text-purple-500" />
                Areas of Expertise
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s.title} className="profile-service-card">
                    <FontAwesomeIcon icon={s.icon} className="profile-service-icon" />
                    <p className="text-white text-xs font-semibold mb-1">{s.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT of sub-grid: Tools + Stats + CTAs */}
            <div className="flex flex-col gap-6">

              {/* Tools */}
              <div className="profile-fade profile-d3">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-3 max-md:text-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-purple-500" />
                  Engineering Tools
                </p>
                <div className="flex flex-wrap gap-2 max-md:justify-center">
                  {tools.map((t) => (
                    <span key={t} className="profile-chip">
                      <span className="profile-chip-dot" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="profile-fade profile-d4 profile-stat-row max-md:mx-auto">
                {stats.map((s) => (
                  <div key={s.label} className={`profile-stat-box${s.wide ? " profile-stat-box-wide" : ""}`}>
                    <div className="profile-stat-num">{s.value}</div>
                    <div className="profile-stat-lbl">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="profile-fade profile-d5 flex flex-wrap gap-3 max-md:justify-center">
                <a href="#portfolio" className="profile-btn-primary">
                  <FontAwesomeIcon icon={faRocket} />
                  <span>View Projects</span>
                </a>
                <a href="mailto:example@gmail.com" className="profile-btn-ghost">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Get in Touch</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
