import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const addNewService = {
      title: data.title,
      description: data.description,
      cost: data.cost,
      imageURL: imageURL,
    };

    const url = `https://pacific-waters-24451.herokuapp.com/addService`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewService),
    })
      .then((res) => console.log("server response", res))
      .catch((err) => console.log(err));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "ee2148c55247e3e4b1ac3d03c80fbcde");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add Service</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="serviceTitle">Service Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Name"
              {...register("title")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Text"
              {...register("description")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Cost</label>
            <input
              type="text"
              className="form-control"
              name="cost"
              placeholder="Enter Price"
              {...register("cost")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ImageUpload">Upload a image</label>
            <input
              onChange={handleImageUpload}
              type="file"
              className="form-control"
              name="imageURL"
              placeholder="Choose File"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
