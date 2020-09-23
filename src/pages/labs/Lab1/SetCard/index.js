import React, { useState } from "react";

// Components

// Styles

import "./styles.scss";

// ---------------

export const SetCard = ({ name }) => {
  const [value, setValue] = useState();

  function handleValue(event) {
    setValue(event.target.value);
  }

  console.log(name);

  return (
    <div className="set-card-wrapper">
      <div className="set-card__name">{name}</div>
      <input
        type="number"
        placeholder="1 2 3"
        value={value}
        onChange={handleValue}
      />
      <div className="set-card__name-and-value">{name + " = "}</div>
    </div>
  );
};
