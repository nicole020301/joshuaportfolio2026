import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="project-card group">
      {/* Image */}
      <div className="project-card-img-wrap">
        <img
          src={data?.image}
          alt={`${data?.title} image`}
          className="project-card-img"
        />
        <div className="project-card-img-overlay" />
        {/* Category pill over image */}
        <span className="project-card-category">{data?.category}</span>
      </div>

      {/* Body */}
      <div className="project-card-body">
        <h3 className="project-card-title">{data?.title}</h3>
        <p className="project-card-desc">{data?.description}</p>
        <a href={data?.link} className="project-card-btn">
          <span>Click to Explore</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
