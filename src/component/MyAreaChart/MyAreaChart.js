import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyAreaChart = ({ data }) => {
  return (
    <AreaChart width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="revenue" stroke="#00ca9d" />
      <Area type="monotone" dataKey="investment" stroke="#82ca9d" />
      <XAxis dataKey="month" />
      <YAxis />
    </AreaChart>
  );
};

export default MyAreaChart;
