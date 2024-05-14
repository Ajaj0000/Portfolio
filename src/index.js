import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let cursorZ = document.createElement("div");

    cursorZ.style.height = "1rem";
    cursorZ.style.width = "1rem";
    cursorZ.style.transform = "translate(-50%, -50%)";
    cursorZ.style.backdropFilter = "brightness(1.7)";
    cursorZ.style.backgroundColor = "rgb(216, 216, 11)"
    cursorZ.style.borderRadius = "50%";
    // cursorZ.style.border = "3px solid rgb(216, 216, 11)";
    cursorZ.style.position = "fixed";
    cursorZ.style.zIndex = "5";
    cursorZ.style.left = "30vw";
    cursorZ.style.top = "30vh";
    cursorZ.style.transition = "100ms all";
    cursorZ.style.pointerEvents = "none";

    document.body.append(cursorZ);
    document.body.addEventListener("mousemove", function (e) {
        cursorZ.style.display = "block";
        cursorZ.style.left = e.clientX + "px";
        cursorZ.style.top = e.clientY + "px";
    });
root.render(
  <>
    <App />
  </>
);


