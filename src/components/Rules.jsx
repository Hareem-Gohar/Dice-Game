import React from 'react';

const Rules = () => {
  return (
    <div className="w-full flex justify-center">
      <div className='bg-gray-200 p-8 w-full md:w-1/2'>
        <h1 className='font-semibold text-2xl mb-5'>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking on the dice, if the selected number is equal to the dice number, you will get the same point as the dice.</p>
        <p>If you guess wrong, 2 points will be deducted.</p>
      </div>
    </div>
  );
};

export default Rules;
