import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ isAuth, avatar, setAvatar }) => {
  const owner = localStorage.getItem("owner")
  return (
    <nav>
      <div className="pageTitle">
        <a href="/">Strange Tree</a>
      </div>
      <div className="links">
        <Link to="/">
          <img src={localStorage.getItem("avatar")} alt="avatar" className="avatar"/>
          {owner}
        </Link>
        {isAuth ? (
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link>
        )}
      </div>
    </nav>
  );
};
