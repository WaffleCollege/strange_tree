import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./App.css";
import Login from "./Login";
import MyPage from "./MyPage";
import Logout from "./Logout";
import Stage from "./Stage";

const App = () => {

  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  //サインインで取得したトークンでAPIにアクセス
  //     .then(() => {
  //       fetch(
  //         `https://api.github.com/users/${owner}/repos?per_page=100&page=1`,
  //         {
  //           headers: {
  //             Authorization: `token ${token}`,
  //             Accept: "application / vnd.github.v3 + json",
  //           },
  //         }
  //       ).then((result) => {
  //         result.json().then((result) => {
  //           setRepoNames(result.map((obj) => obj.name));
  //           console.log(repoNames);
  //         });
  //       });
  //     });
  // };

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route
            path="/"
            element={<MyPage isAuth={isAuth} token={token} />}
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setToken={setToken}
              />
            }
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
          <Route path="/Stage" element={<Stage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
