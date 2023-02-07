import "./assets/styles/global.scss";
import "./assets/styles/main.scss";
import { Draggable } from "@shopify/draggable";

const draggable = new Draggable(document.querySelector("#app"));

const calcOffset = (offset) => {
  return offset * 2 * 0.5;
};

let initialMousePosition;
let containerRect;
let dragRect;

// record initial state
draggable.on("drag:start", (e) => {
  initialMousePosition = {
    x: e.sensorEvent.clientX,
    y: e.sensorEvent.clientY,
  };
});

draggable.on("mirror:created", (evt) => {
  // container DOM Element
  containerRect = evt.sourceContainer.getBoundingClientRect();
  // mirror DOM Element
  dragRect = evt.source.getBoundingClientRect();
});

draggable.on("mirror:move", (evt) => {
  const offsetX = calcOffset(evt.sensorEvent.clientX - initialMousePosition.x);
  const offsetY = calcOffset(evt.sensorEvent.clientY - initialMousePosition.y);
  // handle the case should cancel the drag
  if (
    offsetX > containerRect.width - containerRect.left ||
    offsetX < 0 ||
    offsetY > containerRect.height - dragRect.height ||
    offsetY < 0
  ) {
    // restrict the element
    evt.cancel();
  }
});

