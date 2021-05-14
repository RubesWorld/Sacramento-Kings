import react, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./app.scss";

function App() {
  const [countdownDate, setCountdownDate] = useState(
    new Date("04/26/2006").getTime()
  );
  const [state, setState] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            The <span>Sacramento Kings</span> have NOT made the playoffs in:
          </h1>
          <h2>15 years</h2>
          <h2>3 months</h2>
          <h2>25 days</h2>
          <h2>24 hours</h2>
          <h2>14 minutes</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
