import React from 'react';

const Box = ({ onClick, num, isSelected }) => {
  return (
    <div 
      className={`box border border-black text-xl font-semibold p-4 m-2 cursor-pointer ${isSelected ? 'bg-black text-white' : 'bg-white'}`}
      onClick={onClick}
    >
      {num}
    </div>
  );
};

export default Box;
