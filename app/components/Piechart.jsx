import React from "react";
import { Pie } from "react-chartjs-2";
import { Questions } from "../Data"; // Ensure the path is correct

const PieChart = ({data}) => {
 

  

  return (
    <Pie
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020",
          },
        },
      }}
    />
  );
};

export default PieChart;
