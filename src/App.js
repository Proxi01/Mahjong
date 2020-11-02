import React from "react";
import Board from "./wrappers/Board/Board";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.app}>
      <h1>Mahjong-like game</h1>
      <Board />
    </div>
  );
}

export default App;
