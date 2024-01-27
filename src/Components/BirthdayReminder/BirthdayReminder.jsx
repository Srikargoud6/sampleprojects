import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BirthdayReminder.css";
import { useState } from "react";
import List from "./List";

const data = [
  {
    id: 1,
    name: "Alvin Caal",
    age: 26,
    img: "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Konstantin Mishchenko",
    age: 29,
    img: "https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Sebastian Stan",
    age: 31,
    img: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Jack Winbow",
    age: 25,
    img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Jermemy Chamberlian",
    age: 76,
    img: "https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <div className="card">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>{data.length} Birthday Reminders</h2>
          </div>
          <div>
            <button className="clearBtn" onClick={() => setPeople([])}>
              Clear all
            </button>
          </div>
        </div>

        <List people={people} />
      </div>
    </div>
  );
};

export default BirthdayReminder;
