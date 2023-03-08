import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./CounterStep.module.css";

class CounterStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      stepValid: true,
    };
  }

  handleInputStep = ({ target: { name, value } }) => {
    const { setNewStep } = this.props;
    const numValue = Number(value);
    numValue <= 0 || numValue > 1000000 ? setNewStep(1) : setNewStep(numValue);
    this.setState({
      [name]: numValue,
      [name + "Valid"]: (numValue > 0 && numValue < 1000001) || value === "",
    });
  };

  render() {
    const { stepValid } = this.state;
    const { step, isAutoClickEnabled } = this.props;
    const containerClassNames = cx(styles.container, {
      [styles.invalid__step]: !stepValid,
    });
    return (
      <div className={containerClassNames}>
        <input
          disabled={isAutoClickEnabled}
          value={step}
          name="step"
          className={styles.input}
          type="number"
          onChange={this.handleInputStep}
        />
        <span>Current step: {step}</span>
      </div>
    );
  }
}

CounterStep.propTypes = {
  step: PropTypes.number.isRequired,
  isAutoClickEnabled: PropTypes.func.isRequired,
  setNewStep: PropTypes.func.isRequired,
};

export default CounterStep;
