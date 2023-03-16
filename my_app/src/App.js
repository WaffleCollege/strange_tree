import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./App.css";
import Login from "./Login";
import MyPage from "./MyPage";
import Logout from "./Logout";
import Stage from "./Stage";
import EditPage from "./EditPage";

const App = () => {
  console.log("app");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyPage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/logout"
            element={<Logout />}
          ></Route>
          <Route path="/stage" element={<Stage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
