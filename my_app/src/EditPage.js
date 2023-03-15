import React, { useEffect, useState } from "react";
import ItemBox from "./ItemBox";
import Tree from "./Tree";
import Draggable from "react-draggable";
import { useAuthContext } from "./context";

const EditPage = () => {
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [controlledPosition, setControlledPosition] = useState({ x: 0, y: 0 });
  const [items, setItems] = useState([]);
  const { owner } = useAuthContext();
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
  useEffect(() => {
    const result = fetch(`http://localhost:8080/users/${owner}/items`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  }, [owner]);
  return (
    <div className="container">
      <ItemBox>
        <Draggable onDrag={handleDrag} {...dragHandlers}>
          <div className="box">
            <img
              onDragStart={(e) => e.preventDefault()}
              src="./apple.png"
              alt="apple"
              className="itemImg"
            />
          </div>
        </Draggable>
      </ItemBox>
      <Tree />
    </div>
  );
};

export default EditPage;
