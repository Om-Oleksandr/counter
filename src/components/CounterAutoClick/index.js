import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import CounterControl from "./../CounterControl/index";
import styles from "./CounterAutoClick.module.css";

class CounterAutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: 1000,
    };
    this.idInterval = null;
    this.idTimeout = null;
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ timeout: Number(value) });
  };

  start = () => {
    const { tick } = this.props;
    const { timeout } = this.state;
    if (this.idInterval === null) {
      this.idInterval = setInterval(tick, timeout);
    }
  };

  disableAutoClick = () => {
    if (this.idTimeout === null) {
      this.idTimeout = setTimeout(() => {
        const { isAutoClickEnabled, toggleAutoclick } = this.props;
        clearInterval(this.idInterval);
        if (isAutoClickEnabled) {
          toggleAutoclick(isAutoClickEnabled);
        }

        this.idInterval = null;
      }, 5000);
    }
  };

  componentDidMount() {
    this.start();
    this.disableAutoClick();
  }
  switchAutoClickStatus = () => {
    const { isAutoClickEnabled, toggleAutoclick } = this.props;
    clearInterval(this.idInterval);
    this.idInterval = null;
    clearTimeout(this.idTimeout);
    if (isAutoClickEnabled === false) {
      this.start();
    }
    toggleAutoclick(isAutoClickEnabled);
  };
  render() {
    const { isAutoClickEnabled } = this.props;
    const { timeout } = this.state;
    const containerClassNames = cx(
      styles.autoclick__switch,
      { [styles.enabled]: isAutoClickEnabled },
      {
        [styles.disabled]: !isAutoClickEnabled,
      }
    );
    return (
      <div className={styles.container}>
        <span>
          Auto-click
          <CounterControl
            classes={containerClassNames}
            clickFunc={this.switchAutoClickStatus}
          />
        </span>
        <span>
          <input
            disabled={isAutoClickEnabled}
            className={styles.autoclick__frequency}
            type="number"
            value={timeout}
            onChange={this.handleInput}
          />
          ms
        </span>
      </div>
    );
  }
}

CounterAutoClick.propTypes = {
  step: PropTypes.number.isRequired,
  isAutoClickEnabled: PropTypes.bool.isRequired,
  toggleAutoclick: PropTypes.func.isRequired,
  tick: PropTypes.func.isRequired,
};

export default CounterAutoClick;
