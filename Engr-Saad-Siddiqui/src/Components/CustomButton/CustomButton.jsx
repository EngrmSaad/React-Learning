import React from "react";

function Button({ color = "black", setColor, txtColor = "white" }) {
  let ButtonText = color.charAt(0).toUpperCase() + color.slice(1);
  // console.log(txtColor);
  return (
    <>
      <button
        className="outline-none px-4 py-1 rounded-full shadow-xl"
        style={{ backgroundColor: color, color: txtColor }}
        onClick={() => setColor(color)}
      >
        {ButtonText}
      </button>
    </>
  );
}

export default Button;
