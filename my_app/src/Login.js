import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseApp";
import Button from "./Button";
import "./Login.css";

const Login = ({setIsAuth, setToken }) => {
  const navigate = useNavigate();
  const loginWithGithub = async () => {
    const result = await signInWithPopup(auth, provider);
    setIsAuth(true);
    localStorage.setItem("owner", result._tokenResponse.screenName);
    localStorage.setItem("isAuth", true);
    const credential = GithubAuthProvider.credentialFromResult(result);
    setToken(credential.accessToken);
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
      <Button function={loginWithGithub} text="Githubでログイン" />
    </div>
  );
};

export default Login;
