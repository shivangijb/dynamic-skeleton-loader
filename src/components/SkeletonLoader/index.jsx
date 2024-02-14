import React from "react";
import "./styles.css";

const SkeletonLoader = ({ width, height, type }) => {
  return (
    <span
      className={`skeleton ${type}`}
      style={{
        width,
        height,
      }}
    ></span>
  );
};

export default SkeletonLoader;
