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
  const [repoNames, setRepoNames] = useState([]);
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
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
        <Navbar isAuth={isAuth} avatar={avatar} setAvatar={setAvatar}/>
        <Routes>
          <Route
            path="/"
            element={
              <MyPage
                isAuth={isAuth}
                token={token}
                repoNames={repoNames}
                setRepoNames={setRepoNames}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} setToken={setToken} setAvatar={setAvatar} />}
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
