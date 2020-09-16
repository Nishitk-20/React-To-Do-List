import React, { useState } from "react";

function InputSec(props) {
  const [i, setI] = useState("");

  function handleChange(event) {
    const k = event.target.value;
    setI(k);
  }

  return (
    <div className="form">
      <input type="text" name="item" onChange={handleChange} value={i} />
      <button
        onClick={function () {
          props.add(i);
          setI("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputSec;
