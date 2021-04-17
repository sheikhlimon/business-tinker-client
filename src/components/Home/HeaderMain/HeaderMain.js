import React from "react";
import { Link } from "react-router-dom";
import businessmen from "../../../images/businessmen.jpg";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center bg-light">
      <div className="col-md-6 col-sm-6 col-12 ms-3">
        <img src={businessmen} alt="" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>BUSINESS.</h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <Link to="/services" className="btn btn-dark">
          Services
        </Link>
      </div>
    </main>
  );
};

export default HeaderMain;
