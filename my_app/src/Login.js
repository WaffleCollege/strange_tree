import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseApp";
import Button from "./Button";
import "./Login.css";
import { useAuthContext } from "./context";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { setOwner, setIsAuth, setToken, setAvatar } = useAuthContext();
  const navigate = useNavigate();
  const postUserData = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      // .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const loginWithGithub = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const time = new Date(Date.now());
    const loginTime = time.toISOString();
    const data = {
      username: result._tokenResponse.screenName,
      email: result.user.email,
      avatar: result.user.photoURL,
      created_at: loginTime,
      token: credential.accessToken,
    };
    postUserData("http://localhost:8080/users", data);
    setOwner(result._tokenResponse.screenName);
    setToken(credential.accessToken);
    setIsAuth(true);
    setAvatar(result.user.photoURL);
    localStorage.setItem("owner", result._tokenResponse.screenName);
    localStorage.setItem("isAuth", true);
    localStorage.setItem("avatar", result.user.photoURL);
    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="label">ログインして始める</div>
      <button onClick={loginWithGithub} className="btn">
        Githubでログイン
        <FaGithub />
      </button>
    </div>
  );
};

export default Login;
