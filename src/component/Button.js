import React from "react";

const Button = ({
  background,
  text,
  size,
  height,
  width,
  border,
  color,
  borderRadius,
}) => {
  const buttonStyle = {
    backgroundColor: background,
    fontSize: size,
    color: color,
    width: width,
    height: height,
    borderRadius: borderRadius,
    border: border,
    fontFamily: "SF Pro Display"
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;
