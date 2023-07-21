import React from 'react'

const GraphButton = ({background,text,size,height,width,border,color,borderRadius,padding,onClick,textalign}) => {

    const buttonStyle = {
        backgroundColor: background,
        fontSize: size,
        color: color,
        width: width,
        height: height,
        borderRadius: borderRadius,
        border: border ,
        padding: padding,
        textAlign: textalign,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      };

  return (
    <div style={buttonStyle} onClick={onClick}>
      {text}
    </div>
  )
}

export default GraphButton;