import React, { useState } from "react";

// const [click,setClick] = useState(false);

function List(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecorationLine: click ? "line-through" : null }}
      >
        {props.item}
      </li>
    </div>
  );
}

export default List;
