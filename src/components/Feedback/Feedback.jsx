import React, { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <div
      style={{
        height: '800px',
      }}
    >
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        onLeaveGood={() => setGood(good + 1)}
        onLeaveNeutral={() => setNeutral(neutral + 1)}
        onLeaveBad={() => setBad(bad + 1)}
      />
      <h2>Statistics</h2>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
