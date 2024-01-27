import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tour from "./Tour";
import "./Tours.css";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className="text-center">
        <h1>Our Tours</h1>
      </div>
      <div className="cont">
        {tours.map((place) => {
          return (
            <Tour key={place.id} {...place} removeTour={removeTour}></Tour>
          );
        })}
      </div>
    </>
  );
};

export default Tours;
