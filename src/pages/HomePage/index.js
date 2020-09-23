import React from "react";

// Components

import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";
import { HomeLinkCard } from "./HomeLinkCard";

// Constants

import { urls } from "../../constants/urls";

// Styles

import "./styles.scss";

// ----------------

const data = [
  {
    name: "Лабораторная работа №1",
    des: "Операции над множествами",
    url: urls.lab1,
  },
  {
    name: "Лабораторная работа №2",
    des: "Соответсвие и разбиение",
    url: urls.lab2,
  },
  {
    name: "Лабораторная работа №3",
    des: "Графы",
    url: urls.lab3,
  },
];

// ---------------

export const HomePage = () => {
  return (
    <div className="home-page page">
      <ContentWidthLimiter>
        <h1 className="home-page__title">Привет!</h1>
        <h2 className="home-page__subtitle">
          Выбери карточку и нажми на нее...
        </h2>

        <div className="home-page__list">
          {data.map((card, index) => {
            return (
              <HomeLinkCard
                name={card.name}
                des={card.des}
                url={card.url}
                key={index}
              />
            );
          })}
        </div>
      </ContentWidthLimiter>
    </div>
  );
};
