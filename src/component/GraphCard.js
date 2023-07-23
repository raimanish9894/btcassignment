import React, { useState } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import GraphButton from "./GraphButton";
import { data } from "../utils/Data";
import "../styles/GraphCard.css";

const GraphCard = () => {
  const [activePeriod, setActivePeriod] = useState("Daily");
  const handlePeriodChange = (period) => {
    setActivePeriod(period);
  };

  const filteredData = data.filter((entry) =>
    entry.name.includes(activePeriod)
  );
  if (filteredData.length > 0) {
    const lastDataPoint = filteredData[filteredData.length - 1];
    const extraEntry = { ...lastDataPoint };
    filteredData.push(extraEntry);
  }

  let maxValue = -Infinity;
  let minValue = Infinity;
  filteredData.forEach((entry) => {
    if (entry.uv > maxValue) {
      maxValue = entry.uv;
    }
    if (entry.uv < minValue) {
      minValue = entry.uv;
    }
  });

  // Define a unique ID for the gradient
  const gradientId = "graphCardFillGradient";

  return (
    <div className="graph-card">
      <div className="graph-top">
        <GraphButton
          border={0}
          width="60px"
          height="30px"
          background={activePeriod === "Daily" ? "#AEB8C4" : ""}
          text="Daily"
          borderRadius="16px"
          color={activePeriod === "Daily" ? "white" : "#AEB8C4"}
          textalign="center"
          onClick={() => handlePeriodChange("Daily")}
        />
        <GraphButton
          border={0}
          width="60px"
          height="30px"
          background={activePeriod === "Week" ? "#AEB8C4" : ""}
          text="Week"
          borderRadius="16px"
          textalign="center"
          color={activePeriod === "Week" ? "white" : "#AEB8C4"}
          onClick={() => handlePeriodChange("Week")}
        />
        <GraphButton
          border={0}
          width="60px"
          height="30px"
          background={activePeriod === "Month" ? "#AEB8C4" : ""}
          text="Month"
          borderRadius="16px"
          textalign="center"
          color={activePeriod === "Month" ? "white" : "#AEB8C4"}
          onClick={() => handlePeriodChange("Month")}
        />
        <GraphButton
          border={0}
          width="60px"
          height="30px"
          background={activePeriod === "Year" ? "#AEB8C4" : ""}
          text="Year"
          borderRadius="16px"
          textalign="center"
          color={activePeriod === "Year" ? "white" : "#AEB8C4"}
          onClick={() => handlePeriodChange("Year")}
        />
      </div>
      <div className="graph-main-card">
        <div className="graph-legend">
          <div className="graph-legend-left">
            <div className="graph-legend-left-dot"></div>
            <div className="graph-legend-left-title">Lower: {minValue} </div>
          </div>
          <div className="graph-legend-right">
            <div className="graph-legend-right-dot"></div>
            <div className="graph-legend-right-title">Higher: {maxValue} </div>
          </div>
        </div>
        <ResponsiveContainer width="90%" height={110} className="graph-style">
          <AreaChart
            data={filteredData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            {/* Define the linear gradient */}
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFC843" />
                <stop offset="100%" stopColor="#FF8F17" />
              </linearGradient>
            </defs>
            {/* Apply the gradient to the Area fill */}
            <Area
              type="monotone"
              dataKey="uv"
              stroke={`url(#${gradientId})`}
              strokeWidth={3}
              fill="#fff5e6"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="graph-info">
          <span className="graph-info-dot"></span>1 BTC = ${maxValue}
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
