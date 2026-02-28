import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Address from "./Address";
import Form from "./Form";
import "./contact.css";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Philippines",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "josh.dellamas1120@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+63 912 345 6789",
  },
];

const socials = [
  { icon: faLinkedin,  href: "#", label: "LinkedIn"  },
  { icon: faGithub,    href: "#", label: "GitHub"    },
  { icon: faInstagram, href: "#", label: "Instagram" },
  { icon: faXTwitter,  href: "#", label: "X"         },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-aurora" />

      <div className="contact-card mx-4 xl:mx-auto contact-fade">
        <div className="grid lg:grid-cols-2 gap-0">

          {/* â”€â”€ LEFT: info panel â”€â”€ */}
          <div className="p-8 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-purple-900/30 flex flex-col gap-7">

            {/* Badge */}
            <div className="contact-fade contact-d1">
              <span className="contact-badge">
                <span className="contact-badge-dot" />
                Available for Opportunities
              </span>
            </div>

            {/* Heading */}
            <div className="contact-fade contact-d1">
              <h2 className="contact-heading">
                Let's Build<br />Something Great
              </h2>
              <div className="contact-divider" />
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                As a fresh Aerospace Engineering graduate, I'm actively seeking
                opportunities in aerodynamics, structural analysis, propulsion,
                and related fields. Feel free to reach out â€” I'd love to connect.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="contact-fade contact-d2 flex flex-col gap-3">
              {addressData.map((item, i) => (
                <Address item={item} key={i} />
              ))}
            </div>

            {/* Social links */}
            <div className="contact-fade contact-d3">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-600 mb-3">Find Me On</p>
              <div className="contact-social-bar">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="contact-social-link" aria-label={s.label}>
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* â”€â”€ RIGHT: form â”€â”€ */}
          <div className="p-8 sm:p-10 lg:p-14 contact-fade contact-d2">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1">Send a Message</h3>
            <p className="contact-form-heading">I typically respond within 24 hours.</p>
            <Form />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
