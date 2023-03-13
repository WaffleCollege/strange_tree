import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseApp";
import "./Login.css";
import Button from "./Button";
import { useAuthContext } from "./context";

const Logout = () => {
  const {setIsAuth} = useAuthContext();
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
      <Button  function={logout} text="ログアウト" />

    </div>
  );
};

export default Logout;