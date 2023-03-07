import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseApp";
import Button from "./Button";
import "./Login.css";

const Login = ({ setIsAuth, setToken }) => {
  const navigate = useNavigate();
  const postUserData = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const loginWithGithub = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const time = new Date(Date.now());
    console.log(time.toISOString());
    const loginTime = time.toISOString();
    const data = {username: result._tokenResponse.screenName, email: result.user.email, avatar: result.user.photoURL, first_login: loginTime, tree_id: 1};
    postUserData("http://localhost:8080/users", data);
    setToken(credential.accessToken);
    setIsAuth(true);
    const date = new Date();
    const timeSt = date.toISOString();
    localStorage.setItem("owner", result._tokenResponse.screenName);
    localStorage.setItem("isAuth", true);
    // localStorage.setItem("timeStamp", timeSt.substring(0, timeSt.length - 5));

    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="label">ログインして始める</div>
      <Button function={loginWithGithub} text="Githubでログイン" />
    </div>
  );
};

export default Login;
