import React, { useState } from "react";

// Components

import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import { SetCard } from "./SetCard";
// Styles

import "./styles.scss";

// ---------------

const data = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
  {
    name: "D",
  },
  {
    name: "E",
  },
  {
    name: "F",
  },
  {
    name: "G",
  },
  {
    name: "H",
  },
  {
    name: "I",
  },
  {
    name: "J",
  },
];

export const Lab1 = () => {
  const [counterSets, setCounterSets] = useState("");

  let setArray = [];

  function handleCounterSets(event) {
    setCounterSets(
      event.target.value > 10
        ? 10
        : event.target.value && event.target.value < 0
        ? 0
        : event.target.value
    );
  }

  for (let index = 0; index < counterSets; index++) {
    setArray[index] = data[index];
  }

  return (
    <div className="lab1 page">
      <ContentWidthLimiter>
        <h1 className="lab1__title">Операции над множествами</h1>

        <div className="lab1__counter-sets-wrapper">
          <p className="counter-sets__text">
            Введите количество можеств (1 - 10):
          </p>
          <input
            className="counter-sets__input"
            type="number"
            value={counterSets}
            onChange={handleCounterSets}
            placeholder="0"
          />
        </div>

        <div className="set-list">
          {setArray.map((item) => {
            return <SetCard name={item.name} key={item.name} />;
          })}
        </div>

        {/* {counterSets && <p>{counterSets}</p>} */}
      </ContentWidthLimiter>
    </div>
  );
};
