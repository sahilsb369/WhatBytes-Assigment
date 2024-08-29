import React, { useState } from "react";
const Form = ({ setShow, setScore, setGraph, graph }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore1] = useState("");

  const size= graph.length

  const handleSave = (e) => {
    e.preventDefault();
    
    setGraph([
      ...graph,
      {
        id: size + 1,
        rank: rank,
        percentile: percentile,
      },
    ]);
    
    setScore({
      solved: score,
    });
    setShow(false);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
        <div className='flex justify-between mb-4'>
          <h2 className='text-xl font-bold'>Update Scores</h2>
          <img
            src='/images/html.jpeg'
            alt='Skill Test'
            className='w-12 h-12 object-cover rounded-md'
          />
        </div>
        <form onSubmit={handleSave}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Update your Rank
            </label>
            <input
              type='number'
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              placeholder='Enter your rank'
              className='w-full p-2 border border-gray-300 rounded-md'
             
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Update your Percentile
            </label>
            <input
              type='number'
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              placeholder='Enter your percentile'
              className='w-full p-2 border border-gray-300 rounded-md'
              
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Update your Current Score (out of 15)
            </label>
            <input
              type='number'
              value={score}
              onChange={(e) => setScore1(e.target.value)}
              placeholder='Enter your score'
              className='w-full p-2 border border-gray-300 rounded-md'
              max='15'
              required
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={() => {
                setShow(false); // Close the form when "Cancel" is clicked
              }}
              className='bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
