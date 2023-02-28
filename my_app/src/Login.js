import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseApp";
import Button from "./Button";
import "./Login.css";

const Login = ({setIsAuth, setToken, token }) => {
  const navigate = useNavigate();
  const loginWithGithub = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    setIsAuth(true);
    localStorage.setItem("owner", result._tokenResponse.screenName);
    localStorage.setItem("isAuth", true);
    const oauthToken = result._tokenResponse.oauthAccessToken;
    setToken(oauthToken);
    navigate("/");
  };
  //   .then(() => {
  //         fetch(
  //           `https://api.github.com/users/${owner}/repos?per_page=100&page=1`,
  //           {
  //             headers: {
  //               Authorization: `token ${token}`,
  //               Accept: "application / vnd.github.v3 + json",
  //             },
  //           }
  //         ).then((result) => {
  //           result.json().then((result) => {
  //             console.log(result);
  //             setRepoNames(result.map((obj) => obj.name));
  //             console.log(repoNames);
  //           });
  //         });
  //       });
  //   };
  return (
    <div className="loginPage">
      <div className="label">ログインして始める</div>
      <Button function = {loginWithGithub} text="Githubでログイン" />
    </div>
  );
};

export default Login;
