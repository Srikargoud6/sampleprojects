import React from "react";
import axios from "axios";
import { useState } from "react";

const Axios = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );

    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          placeholder="Enter TV show name"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Axios;
