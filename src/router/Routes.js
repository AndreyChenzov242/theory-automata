import React from "react";

// Modules

import { Switch, Route, Redirect } from "react-router";

// Components

import { HomePage } from "../pages/HomePage";
import { Lab1 } from "../pages/labs/Lab1";
import { Lab2 } from "../pages/labs/Lab2";
import { Lab3 } from "../pages/labs/Lab3";

// Constants

import { urls } from "../constants/urls";

// ----------------

export const Routes = () => {
  return (
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={Lab1} path={urls.lab1} exact />
      <Route component={Lab2} path={urls.lab2} exact />
      <Route component={Lab3} path={urls.lab3} exact />
      {/* Redirect */}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
