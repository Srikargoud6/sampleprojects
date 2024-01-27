import React from "react";
import "./Tours.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="place">
      <img src={image} className="placeimg" />
      <div className="info">
        <h4 className="text-center">{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="readmore" onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show Less` : `Read More`}
          </button>
        </p>
        <button className="btn btn-success" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
