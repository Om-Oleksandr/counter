import React, { Component } from "react";
import CounterBody from "./../CounterBody";
import CounterStep from "./../CounterStep";
import styles from "./CounterSection.module.scss";
import CounterAutoClick from "./../CounterAutoClick";
class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      add: true,
      isAutoClickEnabled: true,
    };
  }

  setNewCounter = (newCounter, mode) => {
    mode
      ? this.setState((state, props) => {
          const { counter } = state;
          let newCount = counter;
          return { counter: (newCount += newCounter) };
        })
      : this.setState((state, props) => {
          const { counter } = state;
          let newCount = counter;
          return { counter: (newCount -= newCounter) };
        });
  };

  setNewStep = (newStep) => {
    this.setState({ step: newStep });
  };

  setNewMode = (newMode) => {
    this.setState({ add: !newMode });
  };

  toggleAutoclick = (toggle) => {
    this.setState({ isAutoClickEnabled: !toggle });
  };

  tick = () => {
    const { add } = this.state;
    add
      ? this.setState((state, props) => {
          const { counter, step } = state;
          let newCount = counter;
          const newCounter = newCount + step;
          return { counter: newCounter };
        })
      : this.setState((state, props) => {
          const { counter, step } = state;
          let newCount = counter;
          const newCounter = newCount - step;
          return { counter: newCounter };
        });
  };

  render() {
    const { isAutoClickEnabled, counter, step, add } = this.state;
    return (
      <article className={styles.container}>
        <CounterBody
          add={add}
          counter={counter}
          step={step}
          isAutoClickEnabled={isAutoClickEnabled}
          setNewCounter={this.setNewCounter}
          setNewMode={this.setNewMode}
        />
        <CounterStep
          isAutoClickEnabled={isAutoClickEnabled}
          step={step}
          setNewStep={this.setNewStep}
        />
        <CounterAutoClick
          isAutoClickEnabled={isAutoClickEnabled}
          toggleAutoclick={this.toggleAutoclick}
          tick={this.tick}
          step={step}
        />
      </article>
    );
  }
}

export default CounterSection;
