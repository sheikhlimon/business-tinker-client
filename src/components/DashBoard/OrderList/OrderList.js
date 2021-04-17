import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
          <h1>This is orderlist</h1>
      </div>
    </section>
  );
};

export default OrderList;
