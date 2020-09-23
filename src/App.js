import React from "react";

// Modules

import { BrowserRouter } from "react-router-dom";

// Components

import { HomeButtonLink } from "./components/HomeButtonLink";
import { Routes } from "./router/Routes";

// Utils

import { history } from "./utils/history";

// ----------------

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter history={history}>
        <Routes />
        <HomeButtonLink />
      </BrowserRouter>
    </div>
  );
};
