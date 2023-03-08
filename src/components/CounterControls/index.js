import React from "react";
import PropTypes from "prop-types";
import CounterControl from "./../CounterControl";

const CounterControls = (props) => {
  const calcCounter = () => {
    const { add, step, setNewCounter } = props;
    setNewCounter(step, add);
  };

  const changeMode = () => {
    const { add, setNewMode } = props;
    setNewMode(add);
  };
    const { add, step, isAutoClickEnabled } = props;
    return (
      <>
        <CounterControl
          isDisabled={isAutoClickEnabled}
          name={`${add ? "+" : "-"}${step}`}
          clickFunc={calcCounter}
        />
        <CounterControl
          isDisabled={isAutoClickEnabled}
          name="Change mode"
          clickFunc={changeMode}
        />
      </>
    );
}

CounterControls.propTypes = {
  step: PropTypes.number.isRequired,
  add: PropTypes.bool.isRequired,
  isAutoClickEnabled: PropTypes.bool.isRequired,
  setNewMode: PropTypes.func.isRequired,
  setNewCounter: PropTypes.func.isRequired,
};

export default CounterControls;
