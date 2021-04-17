import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="testimonials my-5 py-5">
      <div className="container pt-5 mt-5">
        <div className="section-header">
          <h5 className="text-primary text-uppercase text-center">Testimonial</h5>
        </div>
        <div className="d-flex justify-content-center mt-5 pt-5">
          {reviews.map(review => (
            <Testimonial review={review} key={review._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
