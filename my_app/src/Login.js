import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseApp";

const Login = ({ owner, setOwner, setIsAuth, setToken }) => {
  const navigate = useNavigate();
  const loginWithGithub = () => {
    signInWithPopup(auth, provider).then((result) => {
      setOwner(result._tokenResponse.screenName);
      setIsAuth(true);
      const credential = GithubAuthProvider.credentialFromResult(result);
      setToken(credential.accessToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("owner", owner);
      navigate("/");
    });
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
    <div>
      <div>ログインして始める</div>
      <button onClick={loginWithGithub}>Githubでログイン</button>
    </div>
  );
};

export default Login;
