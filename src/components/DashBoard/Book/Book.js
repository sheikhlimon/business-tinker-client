import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const Book = () => {
  const { id } = useParams();

  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(`https://pacific-waters-24451.herokuapp.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const { title, imageURL, cost, description } = booking;

  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <div className="col-md-4 text-center card">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
