import React from "react";

// Modules

import { Link } from "react-router-dom";
import types from "prop-types";

// Styles

import "./styles.scss";

// ----------------

export const HomeLinkCard = (props) => {
  const { url, name, des } = props;

  return (
    <Link className="home-link-card" to={url || ""}>
      <p className="home-link-card__title">{name}</p>
      <p className="home-link-card__des">{des}</p>
    </Link>
  );
};

// Type of props

HomeLinkCard.propTypes = {
  name: types.string.isRequired,
  url: types.string.isRequired,
  des: types.string.isRequired,
};
