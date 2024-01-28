import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BrithdayReminder from "./Components/BirthdayReminder/BirthdayReminder";
import Travel from "./Components/Travel/Travel";
import Reviews from "./Components/Reviews/Reviews";
import Questions from "./Components/Questions/Questions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <nav className="mainCont">
          <Link to="/">
            <div className="cont">
              <h3>Birthday reminder</h3>
            </div>
          </Link>
          <Link to="/travel">
            <div className="cont">
              <h3>Travel</h3>
            </div>
          </Link>
          <Link to="/reviews">
            <div className="cont">
              <h3>Reviews</h3>
            </div>
          </Link>
          <Link to="/questions">
            <div className="cont">
              <h3>Questions</h3>
            </div>
          </Link>
        </nav>
      </main>
      <Routes>
        <Route path="/" element={BrithdayReminder} />
        <Route path="/travel" element={Travel} />
        <Route path="/reviews" element={Reviews} />
        <Route path="questions" element={Questions} />
      </Routes>
    </>
  );
};

export default Home;
