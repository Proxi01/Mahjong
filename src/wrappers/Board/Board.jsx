import React, { useState, useEffect } from "react";
import s from "./Board.module.scss";
import Card from "../../components/Card/Card";
import { compareValues, generatePuzzles } from "../../helpers";

const Board = () => {
  const [puzzles, setPuzzles] = useState([]);
  const [visiblePuzzlesId, setVisiblePuzzlesId] = useState([]);
  const [guessedPuzzles, setGuessedPuzzles] = useState([]);
  const [ableToSelect, setAbleToSelect] = useState(false);

  const initNewGame = () => {
    const generatedPuzzles = generatePuzzles();
    const puzzlesId = generatedPuzzles.map(({ id }) => id);
    setPuzzles(generatedPuzzles);
    setVisiblePuzzlesId(puzzlesId);
    setGuessedPuzzles([]);
    setAbleToSelect(false);

    setTimeout(() => {
      setVisiblePuzzlesId([]);
      setAbleToSelect(true);
    }, 5000);
  };

  useEffect(() => {
    initNewGame();
  }, []);

  const isHidden = (id) => {
    return !visiblePuzzlesId.includes(id) && !guessedPuzzles.includes(id);
  };

  const handleClick = ({ id }) => {
    console.log(visiblePuzzlesId, id);
    const selectedPuzzlesId = [...visiblePuzzlesId, id];
    setVisiblePuzzlesId(selectedPuzzlesId);

    if (selectedPuzzlesId.length === 2) {
      setAbleToSelect(false);

      const isEqual = compareValues(puzzles, selectedPuzzlesId);

      if (isEqual) {
        setGuessedPuzzles([...guessedPuzzles, ...selectedPuzzlesId]);
        setVisiblePuzzlesId([]);
        setAbleToSelect(true);
      } else {
        setTimeout(() => {
          setVisiblePuzzlesId([]);
          setAbleToSelect(true);
        }, 500);
      }
    }
  };

  return (
    <div className={s.gameBoard}>
      {puzzles.map((puzzle) => (
        <Card
          key={puzzle.id}
          puzzle={puzzle}
          isHidden={isHidden(puzzle.id)}
          handleClick={handleClick}
          ableToSelect={ableToSelect}
        />
      ))}
      <div className={s.btnWrapper}>
        <button onClick={initNewGame}>New game</button>
      </div>
    </div>
  );
};

export default Board;
