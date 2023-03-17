import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "./context";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navbar = () => {
  const { owner, isAuth, avatar } = useAuthContext();
  const dropDownMenu = document.getElementsByClassName("dropdown")[0];
  const toggleVisibility = (e) => {
    dropDownMenu.classList.toggle("show");
  };

  window.onclick = function (event) {
    if (!event.target.matches(".menuWrapper")) {
      if (dropDownMenu.classList.contains("show")) {
        dropDownMenu.classList.remove("show");
      }
    }
  };

  return (
    <nav>
      <div className="pageTitle">
        <a href="/">Strange Tree</a>
      </div>
      <div className="links">
        {isAuth ? (
          <div className="menuWrapper" onClick={toggleVisibility}>
            <img src={avatar} alt="avatar" className="avatar" />
            <div className="username">
              {owner}
              <IoMdArrowDropdown />
            </div>
          </div>
        ) : null}
        <ul className="dropdown">
          {isAuth ? (
            <>
              <li className="menuItem">
                <Link to="/logout">
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                  ログアウト
                </Link>
              </li>
              <li className="menuItem">
                <Link to="/edit">ツリーを編集</Link>
              </li>
              <li className="menuItem">
                <Link to="/">マイページ</Link>
              </li>
            </>
          ) : (
            <li className="menuItem">
              <Link to="/login">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                ログイン
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
