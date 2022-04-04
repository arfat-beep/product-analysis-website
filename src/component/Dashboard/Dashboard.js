import ImportFromJson from "../../Hook/ImportFromJson";
import LineChart from "../LineChart/LineChart";
import "./Dashboard.css";
const Dashboard = () => {
  const [data, setData] = ImportFromJson("data.json");

  return (
    <div className="dashbords">
      <div className="rechart-one-container">
        {/* <LineChart data={data}></LineChart> */}
      </div>
      <div className="rechart-two-container">2</div>
      <div className="rechart-three-container">3</div>
      <div className="rechart-four-container">4</div>
    </div>
  );
};

export default Dashboard;
