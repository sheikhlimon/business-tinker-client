import React from "react";
import { Link } from "react-router-dom";

const ServiceDetail = ({ service }) => {
  const { title, description, cost, imageURL, _id } = service;
  return (
    <div className="col-md-3 m-3 text-center card">
      <img
        className="card-img-top rounded mt-2"
        style={{ height: "150px" }}
        src={imageURL}
        alt=""
      />
      <div className="card-body">
        <h5 className="mt-3 mb-3 card-title ">{title}</h5>
        <h5 className="mt-3 mb-3">${cost}</h5>
        <p className="text-secondary card-text">{description}</p>
        <Link to={`/book/${_id}`} className="stretched-link btn btn-dark">
          Book
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
