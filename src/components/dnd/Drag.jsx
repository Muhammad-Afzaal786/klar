import React, { useState, useEffect } from "react";

const items = [
 { number: "1", title: "🇦🇷 Argentina" },
 { number: "2", title: "🤩 YASS" },
 { number: "3", title: "👩🏼‍💻 Tech Girl" },
 { number: "4", title: "💋 Lipstick & Code" },
 { number: "5", title: "💃🏼 Latina" },
];

const initialDnDState = {
 draggedFrom: null,
 draggedTo: null,
 isDragging: false,
 originalOrder: [],
 updatedOrder: [],
};
function Drag() {
 const [list, setList] = useState(items);
 const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

 const onDragStart = (event) => {
  const initialPosition = Number(event.currentTarget.dataset.position);

  setDragAndDrop({
   ...dragAndDrop,
   draggedFrom: initialPosition,
   isDragging: true,
   originalOrder: list,
  });
  event.dataTransfer.setData("text/html", "");
 };

 const onDragOver = (event) => {
  event.preventDefault();

  let newList = dragAndDrop.originalOrder;

  const draggedFrom = dragAndDrop.draggedFrom;

  // index of the droppable area being hovered
  const draggedTo = Number(event.currentTarget.dataset.position);

  const itemDragged = newList[draggedFrom];
  const remainingItems = newList.filter((item, index) => index !== draggedFrom);

  newList = [...remainingItems.slice(0, draggedTo), itemDragged, ...remainingItems.slice(draggedTo)];

  if (draggedTo !== dragAndDrop.draggedTo) {
   setDragAndDrop({
    ...dragAndDrop,
    updatedOrder: newList,
    draggedTo: draggedTo,
   });
  }
 };

 const onDrop = (event) => {
  setList(dragAndDrop.updatedOrder);

  setDragAndDrop({
   ...dragAndDrop,
   draggedFrom: null,
   draggedTo: null,
   isDragging: false,
  });
 };

 const onDragLeave = () => {
  setDragAndDrop({
   ...dragAndDrop,
   draggedTo: null,
  });
 };
 useEffect(() => {
  console.log("Dragged From: ", dragAndDrop && dragAndDrop.draggedFrom);
  console.log("Dropping Into: ", dragAndDrop && dragAndDrop.draggedTo);
 }, [dragAndDrop]);

 useEffect(() => {
  console.log("List updated!");
 }, [list]);

 return (
  <div>
   <section>
    <ul>
     {list.map((item, index) => {
      return (
       <li
        key={index}
        data-position={index}
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
        className={dragAndDrop && dragAndDrop.draggedTo === Number(index) ? "dropArea" : ""}
       >
        <span>{item.number}</span>
        <p>{item.title}</p>
        <i class="fas fa-arrows-alt-v"></i>
       </li>
      );
     })}
    </ul>
   </section>
  </div>
 );
}

export default Drag;
