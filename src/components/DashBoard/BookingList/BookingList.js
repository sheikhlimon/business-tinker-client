import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      ></div>
    </section>
  );
};

export default BookingList;
