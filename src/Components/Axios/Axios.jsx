import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    setList(res.data);
    setQuery("");
    // console.log(res.data[0].show.name);
    //console.log(res.data[0].show.image.original);
  };

  return (
    <div className="d-flex flex-column align-items-center m-5">
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
      <main className="d-flex flex-wrap">
        {list.map((tv, id) => {
          return (
            <div className="m-2">
              <img src={tv.show.image.medium} alt={tv.show.name}></img>
              <p key={id}>{tv.show.name}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Axios;
