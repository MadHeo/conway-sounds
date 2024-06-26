import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GameOfLife from "./GameOfLife";
import * as serviceWorker from "./serviceWorker";

// const gliderPopulation = [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2],]
const gliderPopulation = [
  [5, 1],
  [5, 2],
  [6, 1],
  [6, 2],
  [5, 11],
  [6, 11],
  [7, 11],
  [4, 12],
  [3, 13],
  [3, 14],
  [8, 12],
  [9, 13],
  [9, 14],
  [6, 15],
  [4, 16],
  [5, 17],
  [6, 17],
  [7, 17],
  [6, 18],
  [8, 16],
  [3, 21],
  [4, 21],
  [5, 21],
  [3, 22],
  [4, 22],
  [5, 22],
  [2, 23],
  [6, 23],
  [1, 25],
  [2, 25],
  [6, 25],
  [7, 25],
  [3, 35],
  [4, 35],
  [3, 36],
  [4, 36],
];
ReactDOM.render(
  <GameOfLife
    width={22}
    height={22}
    startingPopulation={gliderPopulation}
    start={true}
    border="marquee"
    cellWidth={10}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
