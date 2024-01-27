import React from "react";
import "./BirthdayReminder.css";
import "bootstrap/dist/css/bootstrap.min.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        let { id, name, age, img } = person;
        return (
          <div className="d-flex m-3 align-items-center">
            <div>
              <img src={img} className="img m-2" />
            </div>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
