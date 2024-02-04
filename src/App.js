import logo from "./logo.svg";
import "./App.css";
import BrithdayReminder from "./Components/BirthdayReminder/BirthdayReminder";
import Travel from "./Components/Travel/Travel";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import { Link, Route, Routes } from "react-router-dom";
import ReactForms from "./Components/ReactForms/ReactForms";

function App() {
  return (
    <div>
      <ReactForms />
    </div>
  );
}

export default App;

{
  /* <main>
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
<Route path="/" element={<BrithdayReminder />} />
<Route path="/travel" element={<Travel />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="questions" element={<Questions />} />
</Routes> */
}
