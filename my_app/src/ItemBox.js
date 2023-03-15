import React from "react";
import "./ItemBox.css";

const ItemBox = ({ children }) => {
  return (
    <div className="itemBox">
      <p>ItemBox</p>
      {children}
    </div>
  );
};

export default ItemBox;