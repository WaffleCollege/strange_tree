import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseApp";
import Button from "./Button";
import "./Login.css";

const Login = ({ setIsAuth, setToken }) => {
  const navigate = useNavigate();
  const loginWithGithub = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    setToken(credential.accessToken);
    setIsAuth(true);
    localStorage.setItem("owner", result._tokenResponse.screenName);
    localStorage.setItem("isAuth", true);
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
