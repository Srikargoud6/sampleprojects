import React from "react";
import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Axios.css";

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

    const res1 = res.data;
    const results = res1.filter((tv) => {
      return (
        query && tv.show.image && tv.show.name.toLowerCase().includes(query)
      );
    });
    setList(results);
    setQuery("");
    // console.log(res.data[0].show.name);
    //console.log(res.data[0].show.image.original);
  };

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <form onSubmit={handleSubmit} className="searchbar">
        <input
          type="text"
          name="searchQuery"
          placeholder="Type to search..."
          value={query}
          onChange={handleChange}
          className="search"
        />
        <button type="submit" onClick={handleSubmit} className="buton">
          <FaSearch />
        </button>
      </form>
      {/* <div className="autocomplete">
        {list
          .filter((item) => {
            const searchTerm = query.toLowerCase();
            const showName = item.show.name;
            return searchTerm && showName.startsWith(searchTerm);
          })
          .map((item) => {
            return <p>{item.show.name}</p>;
          })}
      </div> */}
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
