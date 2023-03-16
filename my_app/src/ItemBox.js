import React from "react";
import "./ItemBox.css";

const ItemBox = ({ children }) => {
  return (
    <div className="itemBox">
      <h4>ItemBox</h4>
      <div className="imgContainer">{children}</div>
    </div>
  );
};

export default ItemBox;
