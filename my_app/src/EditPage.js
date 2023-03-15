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
  const getIdList = async () => {
    const result = await fetch(
      `http://localhost:8080/users/${owner}/items`
    ).then((result) => result.json());
    const idList = await Promise.all(result.map((data) => data.id));
    return idList;
  };
  const getItemList = async () => {
    const idList = await getIdList();
    const itemList = await Promise.all(
      idList.map(async (id) => {
        const item = await fetch(`http://localhost8080/items?id=${id}`).then(
          (res) => res.json()
        );
        return item;
      })
    );
    return itemList;
  };
  useEffect(() => {
    const _items = getItemList();
    setItems(_items);
  }, [owner, setItems]);
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
