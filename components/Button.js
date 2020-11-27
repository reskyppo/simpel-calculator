import React from "react";

function Button({ val, onClick }) {
  return (
    <div className="w-16 h-16 px-2  m-2 ">
      <button
        name={val}
        onClick={(e) => onClick(e.target.name)}
        className="text-yellow-600  font-semibold text-2xl"
      >
        {val}
      </button>
    </div>
  );
}

export default Button;
