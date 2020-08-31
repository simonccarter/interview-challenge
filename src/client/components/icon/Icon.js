import React from "react";
import PropTypes from "prop-types";

const Icon = ({ text }) => <span className="dietary">{text}</span>;

Icon.prototype = {
  text: PropTypes.string.isRequired,
};

export default Icon;
