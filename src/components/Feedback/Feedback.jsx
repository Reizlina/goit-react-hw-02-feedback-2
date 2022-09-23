import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import styles from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round(good / (total / 100));
  }

  onButtonClick = buttonName => {
    this.setState(prevState => {
      return {
        [buttonName]: prevState[buttonName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onButtonClick={this.onButtonClick}
            buttonName={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {!Boolean(total) && <Notification message="There is no feedback" />}
          {Boolean(total) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
