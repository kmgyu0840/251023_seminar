// 메인 엔트리 — 모든 Box 컴포넌트를 import 후 렌더링
import box1 from "./components/box1.js";
import box2 from "./components/box2.js";
import box3 from "./components/box3.js";
import box4 from "./components/box4.js";
import box5 from "./components/box5.js";
import box6 from "./components/box6.js";
import box7 from "./components/box7.js";
import box8 from "./components/box8.js";

const boxesContainer = document.getElementById("boxes");

const boxes = [box1, box2, box3, box4, box5, box6, box7, box8];
boxes.forEach((box) => {
  const element = box();
  boxesContainer.appendChild(element);
});
