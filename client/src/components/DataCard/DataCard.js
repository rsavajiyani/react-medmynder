import React from "react";
// import Label from "../Label";
import Input from "../../components/Input";

export const DataCard = props => (
  <div className="col m6">
    <div className="card large">
      <div className="card-content">
        <p>This is where the medications list will go</p>
        <p>And the input from the form will be added here</p>
        
      </div>
      <div className="card-tabs">
        <ul className="tabs tabs-fixed-width">
          <li className="tab"><a href="#test4">Test 1</a></li>
          <li className="tab"><a className="active" href="#test5">Test 2</a></li>
          <li className="tab"><a href="#test6">Test 3</a></li>
        </ul>
      </div>
      <div className="card-content grey lighten-4">
        <div id="test4">Test 1</div>
        <div id="test5">Test 2</div>
        <div id="test6">Test 3</div>
      </div>
    </div>
  </div>


);
export default DataCard;