import LineChartGraph from "../LineChart/LineChartGraph";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import "./Dashboard.css";
const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="dashbords">
      <div className="rechart-container">
        <h1>MONTH WISE SELL</h1>
        <LineChartGraph data={data}></LineChartGraph>
      </div>
      <div className="rechart-container">
        <h1>Invesment VS Revenue</h1>
        <MyAreaChart data={data}></MyAreaChart>
      </div>
      <div className="rechart-container">
        <h1>Investment VS Revenue</h1>
        <MyBarChart data={data}></MyBarChart>
      </div>
      <div className="rechart-container">
        <h1>Investment VS Revenue</h1>
        <MyPieChart data={data}></MyPieChart>
      </div>
    </div>
  );
};

export default Dashboard;
