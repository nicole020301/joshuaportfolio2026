import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import { useTheme } from "../../../context/ThemeContext";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#9929fb",
        color: "white",
      }}
      className={`hover:text-picto-primary px-5 py-3 mx-1`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        theme === "dark"
          ? position > 50
            ? "bg-black/90 border-b border-purple-900/40 backdrop-blur-md"
            : "bg-transparent"
          : position > 50
          ? "bg-white/95 border-b border-gray-200 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="navbar flex justify-between mx-auto content">
        {/* Logo — always left */}
        <div className="flex items-center">
          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5 gap-3"
          >
            <div className={`relative p-[2px] rounded-2xl transition-all duration-300 ${
              theme === "dark"
                ? "shadow-[0_0_14px_#7c3aed99,0_0_28px_#7c3aed44]"
                : "shadow-[0_0_10px_#7c3aed44]"
            }`}
              style={{
                background: "linear-gradient(135deg, #7c3aed, #c084fc, #000, #7c3aed)",
                backgroundSize: "300% 300%",
                animation: "logoBorderSpin 4s ease infinite",
              }}
            >
              <img
                src={logo}
                className="h-9 sm:h-13 rounded-[14px] block"
                alt="logo"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <p className={`text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Joshua
              </p>
              <p className={`text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                theme === "dark" ? "text-purple-400" : "text-purple-600"
              }`}>
                De Llamas
              </p>
            </div>
          </Link>
        </div>

        {/* Right side — desktop nav + toggle + contact + mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop nav links */}
          <ul className={`hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0 transition-colors duration-300 ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}>
            {menu}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle-btn"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Contact button — desktop only */}
          <Link
            className="hidden lg:inline-flex btn btn-sm xs:btn-md sm:btn-lg btn-primary"
            href="#contact"
            to={`contact`}
            smooth={true}
            duration={900}
          >
            Contact
          </Link>

          {/* Hamburger — mobile only */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-50 mt-3 w-56 p-2 shadow font-semibold ${
                theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-white text-black"
              }`}
            >
              {menu}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
