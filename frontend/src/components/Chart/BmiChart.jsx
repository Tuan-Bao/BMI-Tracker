import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";

function BmiChart(props) {
  const { bmiHistory } = props;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            color: "#333",
          }}
        >
          <p style={{ margin: 0 }}>{`Date: ${label}`}</p>
          <p style={{ margin: 0 }}>{`BMI: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 400 }} className="bmi-chart">
      <h2>BMI History Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={bmiHistory}>
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis
            dataKey="date"
            label={{
              value: "Date",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            dataKey="bmi"
            domain={[0, 40]}
            label={{ value: "BMI", angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="bmi"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            key="bmi-line"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BmiChart;
