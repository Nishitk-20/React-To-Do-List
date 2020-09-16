import React from "react";

// const [click,setClick] = useState(false);

function List(props) {
  return (
    <div>
      <li
        onClick={function () {
          props.onChecked(props.id);
        }}
      >
        {props.item}
      </li>
    </div>
  );
}

export default List;
