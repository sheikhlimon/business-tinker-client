import React from "react";
import workingprocess from "../../../images/working-process.png";

const WorkingProcess = () => {
  return (
    <section
      style={{ height: "600px" }}
      className="row d-flex align-items-center mt-5 pt-5"
    >
      <div className="col-md-6 col-sm-6 col-12 ms-3">
        <img src={workingprocess} alt="" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>WORKING PROCESS</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <h5 style={{ borderBottom: "2px solid red" }}>
          Your Business Skills But Never Stop Improving.
        </h5>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          libero corrupti voluptas accusantium iste, vero cum vel. Deserunt quam
          laboriosam, nam dignissimos modi et dolore ducimus ut velit esse
          incidunt.
        </p>
        <h6>Tactics That Can Help Your Business Grow</h6>
        <h6>The Secret of Successful Business</h6>
        <h6>How To Start A Business With Business</h6>
      </div>
    </section>
  );
};

export default WorkingProcess;
