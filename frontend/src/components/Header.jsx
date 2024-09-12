import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="bg-violet-500 text-white font-semibold text-center p-3 py-4 text-xl md:text-2xl">
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
