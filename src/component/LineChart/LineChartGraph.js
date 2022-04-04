import React from "react";
import {
  Area,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartGraph = ({ data }) => {
  return (
    <LineChart width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
      <YAxis />
    </LineChart>
  );
};

export default LineChartGraph;
