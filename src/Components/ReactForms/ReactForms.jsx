import React, { useState } from "react";

const ReactForms = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          name="username"
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Name</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReactForms;
