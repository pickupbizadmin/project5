import React from "react";
import { FullName } from "./components/FullName";
import { SalSlip } from "./components/SalSlip";
import "./components/common.css";

function App() {
  return (
   <div className="main">
    <input type="number" placeholder="Enter your Basic Salary" />
    <button>Submit</button>
    <FullName fname="Om" lname="Prakash" />
    <SalSlip basic={10000} />
   </div>
  );
}

export default App;
