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

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            The <span>Sacramento Kings</span> have NOT made the playoffs since
            April 25, 2006. That's
          </h1>
          <div className="time-holder">
            <h2>15 years </h2>
            <h2>3 months</h2>
            <h2>25 days</h2>
            <h2>24 hours</h2>
            <h2>14 minutes</h2>
          </div>
        </div>
        <div className="coaches">
          <h1>
            In that time span, we've had 7 coaches, 2 owners, 2 stadiums, 4
            jerseys, 2 all-stars and 0 WINNING SEASONS.
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
