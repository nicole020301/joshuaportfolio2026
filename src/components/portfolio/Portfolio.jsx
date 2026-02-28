import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <section
      className="portfolio-section"
      id="portfolio"
    >
      {/* Section header */}
      <div className="content max-2xl:px-4">
        <div className="text-center mx-auto max-w-2xl mb-16 md:mb-20">
          <span className="portfolio-badge">Selected Work</span>
          <h2 className="section-title mt-4 mb-6">Portfolio</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            A curated selection of projects spanning aerospace engineering,
            systems design, and technical problem-solving.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 xl:gap-8">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 md:mt-18">
          <a
            href="#!"
            className="btn btn-primary py-3.5 px-10 text-[15px] font-semibold"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
