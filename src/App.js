import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Components/Home";

export default function App() {
  return (
    <Router>
      {/* <Link to="/Home">Home</Link>
        <Link to="/Test">Test</Link> */}

      <div>

        <div className="_navbar">
          <div>
            <h2 style={{ color: 'orange', top: '0px', position: 'relative' }}>LPU <span style={{ color: 'black' }}>Quora</span></h2>
          </div>
          <div>
            <input className="_inputTextField" placeholder="Enter Your Querry" type="text"/>
          </div>
          <div>
            <ul className="_unorderedList">
              <li className="_li">Role1</li>
              <li className="_li">Role1</li>
              <li className="_li">Role1</li>
              <li className="_li">
                <Link style={{ textDecoration: 'none',color:'white' }} to="/Home">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Test" element={<Test />}/>
        <Route path="/Navigate" element={<Navigate />}/> */}
      </Routes>
    </Router>
  );
}