import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import type { MarkerType } from "../interfaces/types";
import { GEO_URL } from "../constants";

const MapWithMarkers: React.FC<{ markers: MarkerType[] }> = ({ markers }) => {
  return (
    <ComposableMap
      style={{ width: "100%", height: "100%", marginRight: "15px", marginLeft: "-15px" }}
      projectionConfig={{ scale: 225 }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#A8C5DA"
              stroke="#A8C5DA"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle
            r={16}
            className="fill-black dark:fill-white stroke-white dark:stroke-black"
            strokeWidth={8}
          />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapWithMarkers;
