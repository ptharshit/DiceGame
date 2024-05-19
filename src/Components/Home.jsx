import React from 'react';

const Home = ({ toggle }) => {
  return (
    <div className="bg-soft-radial min-h-screen w-full flex justify-center items-center p-4">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80%] w-full lg:w-[80%] border border-black text-black">
        {/* left */}
        <div className="w-full lg:w-[50%] flex justify-center items-center p-4">
          <img className="max-h-full max-w-full" src="../Images/Dicess/Dicess.png" alt="Dice Game" />
        </div>
        {/* right */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6 justify-center items-center p-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-center">Dice Game</h1>
          <button
            onClick={toggle}
            className="border-2 border-black text-white bg-black p-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            Play Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
