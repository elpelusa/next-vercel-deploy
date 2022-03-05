import React, { FC } from "react";

export const DarkLayout:FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#c2c2c2",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  );
};
