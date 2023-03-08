import React from "react";
import PropTypes from "prop-types";
import CounterControls from "./../CounterControls";
import styles from "./CounterBody.module.css";

const CounterBody = (props) => {
  const { counter, setNewCounter, step, add, setNewMode, isAutoClickEnabled } =
    props;
  return (
    <div className={styles.container}>
      Counter: {counter}
      <div>
        <CounterControls
          isAutoClickEnabled={isAutoClickEnabled}
          setNewMode={setNewMode}
          add={add}
          step={step}
          setNewCounter={setNewCounter}
        />
      </div>
    </div>
  );
};

CounterBody.propTypes = {
  counter: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  add: PropTypes.bool.isRequired,
  isAutoClickEnabled: PropTypes.bool.isRequired,
  setNewMode: PropTypes.func.isRequired,
  setNewCounter: PropTypes.func.isRequired,
};

export default CounterBody;
