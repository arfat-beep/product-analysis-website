import React from "react";
import {
  Bar,
  AreaChart,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyBarChart = ({ data }) => {
  return (
    <BarChart width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar type="monotone" dataKey="investment" stackId="a" fill="#8884d8" />
      <Bar type="monotone" dataKey="revenue" stackId="a" fill="#82ca9d" />
      <XAxis dataKey="month" />
      <YAxis />
    </BarChart>
  );
};

export default MyBarChart;
