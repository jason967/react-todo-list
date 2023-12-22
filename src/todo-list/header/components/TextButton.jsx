import React from "react";

export default function TextButton({ text, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}
