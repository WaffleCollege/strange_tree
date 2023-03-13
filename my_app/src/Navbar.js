import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "./context";

export const Navbar = () => {
  const { owner, isAuth, avatar } = useAuthContext();

  return (
    <nav>
      <div className="pageTitle">
        <a href="/">Strange Tree</a>
      </div>
      <div className="links">
        <Link to="/edit">ツリーを飾る</Link>
        {isAuth ? (
          <>
            <Link to="/">
              <img src={avatar} alt="avatar" className="avatar" />
              {owner}
            </Link>
            <Link to="/logout">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              ログアウト
            </Link>
          </>
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
