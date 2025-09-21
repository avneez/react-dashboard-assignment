import React, { useState } from "react";
import type { CustomPieChartProps } from '../interfaces/types';

const CustomPieChart: React.FC<CustomPieChartProps> = ({
  innerRadius = 35,
  outerRadius = 60,
  gapAngle = 18,
  data
}) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativeAngle = -90; // Start from top (12 o'clock position)

  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  // Function to create donut slice path with asymmetric curved ends
  const createSlice = (startAngle: number, endAngle: number, innerR: number, outerR: number) => {
    const rad = Math.PI / 180;
    const capRadius = 12; // Radius for the rounded caps
    const endCapRadius = capRadius + 10; // Radius for the rounded caps at the end

    // Adjust angles to account for the curved caps
    const adjustedStartAngle = startAngle + gapAngle / 2;
    const adjustedEndAngle = endAngle - (gapAngle) / 2;

    // Outer arc points
    const x1Outer = outerR + outerR * Math.cos(-adjustedStartAngle * rad);
    const y1Outer = outerR + outerR * Math.sin(-adjustedStartAngle * rad);
    const x2Outer = outerR + outerR * Math.cos(-adjustedEndAngle * rad);
    const y2Outer = outerR + outerR * Math.sin(-adjustedEndAngle * rad);

    // Inner arc points
    const x1Inner = outerR + innerR * Math.cos(-adjustedEndAngle * rad);
    const y1Inner = outerR + innerR * Math.sin(-adjustedEndAngle * rad);
    const x2Inner = outerR + innerR * Math.cos(-adjustedStartAngle * rad);
    const y2Inner = outerR + innerR * Math.sin(-adjustedStartAngle * rad);

    const largeArcFlag = adjustedEndAngle - adjustedStartAngle > 180 ? 1 : 0;

    return `
      M${x1Outer},${y1Outer}
      A${outerR},${outerR} 0 ${largeArcFlag} 0 ${x2Outer},${y2Outer}
      A${capRadius},${capRadius} 0 0 0 ${x1Inner},${y1Inner}
      A${innerR},${innerR} 0 ${largeArcFlag} 1 ${x2Inner},${y2Inner}
      A${endCapRadius},${endCapRadius} 0 0 1 ${x1Outer},${y1Outer}
      Z
    `;
  };

  return (
    <div style={{ position: "relative", width: outerRadius * 2, height: outerRadius * 2 }}>
      <svg width={outerRadius * 2} height={outerRadius * 2}>
        {data.map((slice) => {
          const startAngle = cumulativeAngle;
          const angle = (slice.value / total) * 360;
          cumulativeAngle += angle;
          const endAngle = cumulativeAngle;

          return (
            <path
              key={slice.name}
              d={createSlice(startAngle, endAngle, innerRadius, outerRadius)}
              fill={slice.color}
              onMouseMove={(e) =>
                setTooltip({
                  x: e.nativeEvent.offsetX,
                  y: e.nativeEvent.offsetY,
                  text: `${(slice.value / total * 100).toFixed(2)}%`,
                })
              }
              onMouseLeave={() => setTooltip(null)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>

      {tooltip && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y + 10,
            left: tooltip.x + 10,
            background: "rgba(0,0,0,0.75)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "8px",
            pointerEvents: "none",
            fontSize: "12px",
            zIndex: 10,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;