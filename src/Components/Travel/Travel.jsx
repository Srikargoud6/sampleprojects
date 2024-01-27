import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Travel.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const Travel = () => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main className="text-center m-5 p-5">
        <h2 className="mb-4">No tours left</h2>
        <button className="btn btn-success" onClick={() => fetchTours()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <div className="mainContainer">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default Travel;
