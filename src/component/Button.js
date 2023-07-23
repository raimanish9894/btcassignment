import React from "react";

const Button = ({
  background,
  text,
 
  height,
  width,
  border,
  color,
  borderRadius,
}) => {
  const buttonStyle = {
    backgroundColor: background,
    fontWeight: "600",
    fontSize: "1rem",
    color: color,
    width: width,
    height: height,
    borderRadius: borderRadius,
    border: border,
    fontFamily: "SF Pro Display",
    flexShrink: 0,
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;
