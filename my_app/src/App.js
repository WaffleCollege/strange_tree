import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./App.css";
import Login from "./Login";

const App = () => {
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
        <Navbar isAuth={isAuth}/>
        <Routes>
          <Route
            path="/login"
            element={<Login 
              owner={owner}
              setOwner={setOwner}
              setIsAuth={setIsAuth}
              setToken={setToken} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
