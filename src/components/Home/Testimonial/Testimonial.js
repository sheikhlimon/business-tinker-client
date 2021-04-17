import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = (props) => {
  const { name, company, description } = props.review;
  const iconStyle = {color: 'orange', float: 'right'};
  return (
    <div className="col-md-4 text-center card">
      <div className="card-body">
        <h5 className="mt-3 mb-3 card-title">{name}</h5>
        <h6 className="mt-3 mb-3 card-title">{company}</h6>
        <p className="text-secondary card-text">{description}</p>
        <p>
          <FontAwesomeIcon style={iconStyle} icon={faStar} />
        </p>
        <p>
          <FontAwesomeIcon style={iconStyle} icon={faStar} />
        </p>
        <p>
          <FontAwesomeIcon style={iconStyle} icon={faStar} />
        </p>
        <p>
          <FontAwesomeIcon style={iconStyle} icon={faStar} />
        </p>
        <p>
          <FontAwesomeIcon style={iconStyle} icon={faStar} />
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
