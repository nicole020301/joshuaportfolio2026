import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-info-icon">
        <FontAwesomeIcon icon={item?.icon} />
      </div>
      <div>
        <p className="contact-info-label">{item?.title}</p>
        <p className="contact-info-value">{item?.description}</p>
      </div>
    </div>
  );
};

export default Address;
