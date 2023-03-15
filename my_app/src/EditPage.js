import React, { useState } from "react";
import ItemBox from "./ItemBox";
import Tree from "./Tree";
import Draggable from "react-draggable";

const EditPage = () => {
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [controlledPosition, setControlledPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };
  const onStart = () => {
    setActiveDrags((prev) => prev + 1);
  };
  const onStop = () => {
    setActiveDrags((prev) => prev - 1);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };
  return (
    <div className="container">
      <ItemBox>
        <Draggable onDrag={handleDrag} {...dragHandlers}>
          <div className="box">
            <img onDragStart={e => e.preventDefault()} src="./fruit_ringo.png" alt="apple" className="itemImg" />
          </div>
        </Draggable>
      </ItemBox>
      <Tree />
    </div>
  );
};

export default EditPage;
