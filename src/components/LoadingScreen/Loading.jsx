import React from "react";
import { TailSpin } from "react-loader-spinner"; 

const Loading = () => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f0f0f0", 
    position: "relative",
  };

  const loaderStyle = {
    marginBottom: "15px",
  };

  const textStyle = {
    color: "#333", 
    fontSize: "24px",
    fontWeight: "600",
    letterSpacing: "1px",
    textAlign: "center",
    animation: "fadeIn 1s", 
  };

  return (
    <div style={containerStyle}>
      <TailSpin
        height={80}
        width={80}
        color="#007bff" 
        ariaLabel="Loading indicator"
        visible={true}
        style={loaderStyle}
      />
      <span style={textStyle}>
        Loading, please wait...
      </span>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
