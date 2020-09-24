import React, { useState } from "react";

// Components

// Styles

import "./styles.scss";

// ---------------

export const SetCard = ({ name }) => {
  const [value, setValue] = useState("");

  let array = [];

  function handleValue(event) {
    // setValue(event.target.value.replace(/([a-zA-z])/, ""))
    setValue(event.target.value.replace("  ", " "));
  }

  if (value) {
    // for (let index = 0; index < value.length; index++) {
    //   if(value.charAt(index)!=" "){

    //   }
    // }
    array = value.split(" ").map(String);
    console.log(value.split(" ").map(String));

    if (array[array.length - 1] == 0) {
      array.splice(array.length - 1, 1);
    }

    if (array[0] == 0) {
      array.splice(0, 1);
    }
  }

  console.log(value);
  console.log("array :", array);
  console.log("length", array.length);
  console.log("ощша", array.join());
  //parseInt(event.target.value, 10)

  return (
    <div className="set-card-wrapper">
      <div className="set-card__input-wrapper">
        <div className="set-card__name">{name}</div>
        <input
          type="text"
          pattern="[0-9]"
          placeholder="1 2 3"
          value={value}
          onChange={handleValue}
        />
      </div>

      <div className="set-card__name-and-value">
        {name + " = " + "{ " + array.join().replaceAll(",", ", ") + " }"}
      </div>
    </div>
  );
};
