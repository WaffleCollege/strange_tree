import React, { useState } from "react";
import ItemBox from "./ItemBox";
import Tree from "./Tree";
import Draggable from "react-draggable";

const EditPage = () => {
  return (
    <div className="container">
      <ItemBox>
        <img src="./fruit_ringo.png" alt="apple" className="itemImg" />
      </ItemBox>
      <Tree />
    </div>
  );
};

export default EditPage;
