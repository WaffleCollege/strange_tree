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

  // // ポップアップによるサインインを実施し、成功したらアクセストークンを取得する
  // const loginWithGithub = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result.user);
  //       console.log(result._tokenResponse.screenName);
  //       setOwner(result._tokenResponse.screenName);
  //       setIsAuth(true);
  //       const credential = GithubAuthProvider.credentialFromResult(result);
  //       if (credential && credential.accessToken) {
  //         setToken(credential.accessToken);
  //         console.log("token: " + credential.accessToken);
  //       }
  //     })
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

  // // アクセストークンを使用してGitHub API（GET /Issues）へリクエストする
  // useEffect(() => {
  //   if (token !== null) {

  //   }
  // }, [token]);

  return (
    <div className="App">
      <Router>
        <Navbar />
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
