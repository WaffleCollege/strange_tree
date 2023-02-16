import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <div className="pageTitle">
        <a href="/">Strange Tree</a>
      </div>
      <div className="links">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          マイページ
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
