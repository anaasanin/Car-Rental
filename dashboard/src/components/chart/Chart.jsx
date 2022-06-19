import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart className="lineChart" data={data}>
          <XAxis dataKey="name" stroke="#4b5563" />
          <Line type="monotone" dataKey={dataKey} stroke="#4b5563" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e2e2e2" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
