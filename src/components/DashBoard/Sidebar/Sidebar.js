import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFirstOrder,
  faServicestack,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("https://pacific-waters-24451.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/booking" className="text-white">
            <FontAwesomeIcon icon={faServicestack} /> <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/addReview" className="text-white">
            <FontAwesomeIcon icon={faServicestack} /> <span>Add Review</span>
          </Link>
        </li>
        {admin && (
          <div>
            <li>
              <Link to="/orderlist" className="text-white">
                <FontAwesomeIcon icon={faFirstOrder} /> <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/addservice" className="text-white">
                <FontAwesomeIcon icon={faServicestack} />{" "}
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeadmin" className="text-white">
                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageservices" className="text-white">
                <FontAwesomeIcon icon={faServicestack} />{" "}
                <span>Manage Services</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
