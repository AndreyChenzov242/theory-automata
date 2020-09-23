import React from "react";

// Modules

import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

// Components

import { ReactIcon } from "../ReactIcon";

// Styles

import "./styles.scss";

// ----------------

export const HomeButtonLink = () => {
  return (
    <Link className="home-link-button" to="/">
      <ReactIcon size="xl">
        <FaHome />
      </ReactIcon>
    </Link>
  );
};
