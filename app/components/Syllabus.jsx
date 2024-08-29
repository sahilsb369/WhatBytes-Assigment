import React, {useState} from "react";
import { Questions } from "../Data";
import { Pie } from "react-chartjs-2";

const Syllabus = ({score}) => {
  
  let unsolved = 15 - score;
  
  const data = {
    labels: ["Solved", "Unsolved"],
    datasets: [
      {
        data: [score, unsolved],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  console.log(Questions)
  

  return (
    <>
      <div className='w-[50%] flex flex-col mb-5 gap-5 md:w-[100%]'>
        <div className='bg-white p-4 rounded-lg  w-full border border-gray-300 flex flex-col gap-5'>
          <h2 className='text-lg font-semibold mb-4'>Syllabus Wise Analysis</h2>

          <div className='mb-4 '>
            <div className='flex justify-between mb-1'>
              <span>HTML Tools, Forms, History</span>
              <span className='text-blue-600 font-semibold'>80%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <div className='bg-blue-600 h-2.5 rounded-full w-[80%]'></div>
            </div>
          </div>

          <div className='mb-4'>
            <div className='flex justify-between mb-1'>
              <span>Tags & References in HTML</span>
              <span className='text-orange-500 font-semibold'>60%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <div className='bg-orange-500 h-2.5 rounded-full w-[60%]'></div>
            </div>
          </div>

          <div className='mb-4'>
            <div className='flex justify-between mb-1'>
              <span>Tables & References in HTML</span>
              <span className='text-red-500 font-semibold'>24%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <div className='bg-red-500 h-2.5 rounded-full w-[24%]'></div>
            </div>
          </div>

          <div className='mb-4'>
            <div className='flex justify-between mb-1'>
              <span>Tables & CSS Basics</span>
              <span className='text-green-500 font-semibold'>96%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5 '>
              <div className='bg-green-500 h-2.5 rounded-full w-[96%]'></div>
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg border border-gray-300  flex flex-col gap-1'>
          <h2 className='text-lg font-semibold mb-4'>Questions Analysis</h2>
          <p className='text-xs text-gray-600'>
            <b>You scored {score} question correct out of 15. </b>
            However it still needs an improvements
          </p>
          <div className='w-full flex justify-center rounded-lg '>
            <div className='w-[20rem] flex justify-center p-5 '>
              <Pie
                data={data}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
