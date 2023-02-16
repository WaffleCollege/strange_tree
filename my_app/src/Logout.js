import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseApp";
import "./Login.css";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.clear();
      navigate("/login");
    });
  };
  return (
    <div className="logoutPage">
      <div className="label">ログアウトする</div>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;