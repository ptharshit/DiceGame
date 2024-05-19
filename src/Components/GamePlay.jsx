import React, { useState } from "react";
import Box from "./Box";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentState, setCurrentState] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const numArray = [1, 2, 3, 4, 5, 6];

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const toggle = () => {
    if (!selectedNumber) {
      setError("You didn't select any number");
      return;
    }
    setError("");
    const ran = generateRandom(1, 7);
    setCurrentState(ran);

    if (selectedNumber === ran) {
      setScore((prev) => prev + ran);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const reset = () => {
    setScore(0);
  };

  return (
    <div className="px-4 md:px-20 lg:px-60 py-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-5xl p-3">{score ?? 0}</h1>
          <p className="font-semibold text-2xl">Total Score</p>
        </div>
        <div>
          <p className="text-red-500 font-semibold font-serif text-right">
            {error}
          </p>
          <div className="flex justify-center md:justify-end">
            {numArray.map((val, i) => (
              <Box
                key={i}
                onClick={() => setSelectedNumber(val)}
                num={val}
                isSelected={selectedNumber === val}
              />
            ))}
          </div>
          <p className="font-semibold mr-2 text-right">Select Number</p>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <img
          onClick={toggle}
          className="cursor-pointer w-32 h-32 md:w-48 md:h-48"
          src={`./Images/Dicess/dice_${currentState}.png`}
          alt={`Dice showing ${currentState}`}
        />
        <h1 className="font-semibold mb-2">Click on dice to roll</h1>
        <button
          onClick={reset}
          className="border-2 border-black m-2 p-2 bg-black text-white rounded-xl px-4 hover:bg-white hover:text-black transition-colors duration-300"
        >
          Reset Score
        </button>
        <button 
          onClick={() => setShowRules(prev => !prev)}
          className="border-2 border-black p-2 bg-black text-white rounded-xl px-4 hover:bg-white hover:text-black transition-colors duration-300">
          {showRules ? "Hide" : "Show"} Rules
        </button>
        {showRules && <Rules />}
      </div>
    </div>
  );
};

export default GamePlay;
