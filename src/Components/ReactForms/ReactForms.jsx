import React, { useState } from "react";
import "./ReactForms.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ReactForms = () => {
  // const [userName, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [person, setPerson] = useState({ userName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.userName && person.email && person.age) {
      const newPerson = { ...person, id: crypto.randomUUID() };
      setPeople([...people, newPerson]);
      setPerson({ userName: "", email: "", age: "" });
    }
  };

  return (
    <div className="mainCont">
      <form className="formCont">
        <section className="inputDiv">
          <label htmlFor="username" className="label">
            UserName:
          </label>
          <input
            type="text"
            id="username"
            name="userName"
            value={person.userName}
            onChange={handleChange}
            className="inputField"
            placeholder="enter username"
          />
        </section>
        <section className="inputDiv">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            className="inputField"
            placeholder="example@gmail.com"
          />
        </section>
        <section className="inputDiv">
          <label htmlFor="age" className="label">
            Age:
          </label>
          <input
            id="age"
            type="text"
            name="age"
            value={person.age}
            onChange={handleChange}
            className="inputField"
            placeholder="enter age"
          />
        </section>
        <br />
        <div className="buttonn">
          <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <h3>List of People</h3>
        {people.map((peo) => {
          return (
            <div key={peo.id}>
              <h5>{peo.userName}</h5>
              <p>{peo.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReactForms;
