import React from 'react';

const GraphButton = ({ background, text, height, width, border, color, borderRadius, padding, onClick }) => {

  const buttonStyle = {
    backgroundColor: background,
    fontSize: "0.8rem",
    color: color,
    width: width,
    height: height,
    borderRadius: borderRadius,
    border: border,
    padding: padding,
    textAlign: "center", // Center the text
    fontWeight: "600",
    flexShrink: 0, // Set flex shrink to 0
    display: 'flex', // Display as a flex container
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      {text}
    </div>
  )
}

export default GraphButton;
