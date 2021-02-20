import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import st from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = e => {
    this.setState(prevState => {
      const btnId = e.target.id;
      return { [btnId]: prevState[btnId] + 1 };
    });
  };

  feedbackCounter = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
  positivePercentageCounter = () => {
    return Math.round((100 / this.feedbackCounter()) * this.state.good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalAmount = this.feedbackCounter();

    return (
      <div className={st.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            leaveFeedback={this.feedbackHandler}
          />
        </Section>
        <Section title="Statistic">
          {totalAmount === 0 && <Notification message="No feedback given" />}
          {totalAmount > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalAmount}
              positivePercentage={this.positivePercentageCounter()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
