import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const MyPieChart = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Tooltip />
      <Pie
        data={data}
        dataKey="revenue"
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data}
        dataKey="investment"
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default MyPieChart;
