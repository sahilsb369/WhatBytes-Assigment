import React, { useEffect, useState } from "react";
import { IoIosTrophy } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { GrCheckboxSelected } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";
import Form from "./Form";
import { Data } from "../Data";
import { Line } from "react-chartjs-2";

const Quick = ({ setScore, score }) => {
  const [show, setShow] = useState(false);

  const handleUpdateClick = () => {
    setShow(!show);
  };
  const [graph, setGraph] = useState(Data);
  let size = graph.length;

  const [chartData, setChartData] = useState({
    labels: graph.map((data) => data.percentile),
    datasets: [
      {
        label: "Your Percentaile",
        data: graph.map((data) => data.rank),
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "blue",
        borderWidth: 0.5,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: graph.map((data) => data.percentile),
      datasets: [
        {
          label: "Your Percentaile",
          data: graph.map((data) => data.rank),
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "blue",
          borderWidth: 0.5,
        },
      ],
    });
  }, [graph]);

  return (
    <div className='flex flex-col w-[50%] md:w-[100%] border-gray-300'>
      <div className='p-4 bg-white rounded-lg  flex gap-5 items-center border border-gray-300 md:flex-col md:align-middle'>
        <img
          src='/images/html.jpeg'
          alt='Skill Test'
          className='w-12 h-12 object-cover rounded-md'
        />
        <div className='flex flex-col'>
          <h5 className='text-lg font-bold'>Hyper Text Markup Language</h5>
          <p className='text-[1rem]'>
            Questions: 08 | Duration: 15 mins | Submitted on 5 August
          </p>
        </div>

        <button
          onClick={handleUpdateClick}
          className=' bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700'
        >
          Update
        </button>
        {show && (
          <Form
            setShow={setShow}
            setScore={setScore}
            setGraph={setGraph}
            graph={graph}
          />
        )}
      </div>
      <div className='p-4 bg-white rounded-lg  gap-5 mt-8 border border-gray-300 flex flex-col'>
        <h5 className='text-lg font-bold'>Quick Statistics</h5>
        <div className='flex justify-around md:flex-col'>
          <div className='flex gap-5 items-center'>
            <IoIosTrophy className='h-10 w-10 bg-gray-300 text-yellow-400 rounded-full p-2' />

            <div>
              <h5>{graph[size - 1].rank}</h5>
              <p> Your Rank</p>
            </div>
          </div>
          <div className='flex gap-5 items-center'>
            <SlCalender className='h-10 w-10 bg-gray-300  rounded-full p-2' />
            <div>
              <h5>{graph[size - 1].percentile}</h5>
              <p>Percentile</p>
            </div>
          </div>
          <div className='flex gap-5 items-center'>
            <GrCheckboxSelected className='h-10 w-10 bg-gray-300 text-green-500 rounded-full p-2' />
            <div>
              <h5>{score}/15</h5>
              <p>Correct Answers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 bg-white rounded-lg  gap-3 mt-8 border border-gray-300 flex flex-col'>
        <h5 className='text-lg font-bold'>Comparison Graph</h5>
        <div className='flex items-center'>
          <p className='text-xs text-gray-600'>
            <b>You scored {graph[size - 1].percentile} percentile</b> which is
            lower than the average percentile 72% of all the engineers who
            took this assessment
          </p>
          <VscGraphLine className='h-10 w-10 bg-gray-300 text-black rounded-full p-2' />
        </div>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Your Percentile",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Quick;
