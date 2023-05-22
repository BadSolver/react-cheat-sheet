// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
import { AppRouter } from "router";
import { Navbar } from "components";
// import { Clock } from "components/Clock/Clock";
import { MyContextProvider } from "components/Clock/MyContext";

function App() {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible((visible) => !visible);
  };

 

  return (
    <MyContextProvider >
      <div className="app-wrapper">
        <div className="app-main">
          <div className="app-navbar">{<Navbar />}</div>
          <div className="app-content">
            {/* <div className="wrapper-main">
              <button onClick={toggleVisible}>показать, скрыть список</button>
              {visible && <Clock />}
            </div> */}
            <div className="app-container">{<AppRouter /> }</div>
          </div>
        </div>
      </div>
    </MyContextProvider>
  );
}

export default App;
