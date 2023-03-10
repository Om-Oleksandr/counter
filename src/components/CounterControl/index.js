import React from "react";
import PropTypes from "prop-types";
const CounterControl = (props) => {
  const { clickFunc, name, classes, isDisabled } = props;
  return (
    <button disabled={isDisabled} className={classes} onClick={clickFunc}>
      {name}
    </button>
  );
};

CounterControl.propTypes = {
  clickFunc: PropTypes.func.isRequired,
  name: PropTypes.string,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default CounterControl;
