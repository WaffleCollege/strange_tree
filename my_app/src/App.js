import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./App.css";
import Login from "./Login";
import MyPage from "./MyPage";
import { useEffect } from "react";
import Logout from "./Logout";

const App = () => {
  // useEffect(() => {
  //   console.log(isAuth);
  // })
  const [token, setToken] = useState(null);
  const [owner, setOwner] = useState("");
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
          <Route path="/" element={<MyPage />}></Route>
          <Route
            path="/login"
            element={
              <Login
                owner={owner}
                setOwner={setOwner}
                setIsAuth={setIsAuth}
                setToken={setToken}
              />
            }
          ></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
