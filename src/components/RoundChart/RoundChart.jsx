import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./RoundChart.css";

const processDataForPieChart = (data) => {
  const categories = {};

  data.forEach((item) => {
    if (categories[item.category]) {
      categories[item.category] += parseInt(item.price, 10);
    } else {
      categories[item.category] = parseInt(item.price, 10);
    }
  });

  return Object.keys(categories).map((category) => ({
    name: category,
    value: categories[category],
  }));
};

const RoundChart = ({ data }) => {
  const processedData = processDataForPieChart(data);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoundChart;
