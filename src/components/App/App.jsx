import css from './App.module.css';
import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Description from '../Description/Description';

// Description items
const heading = 'Sip Happens Café';
const paragraph =
  'Please leave your feedback on our service by selecting one of the options below.';

// Notification items
const noFeedback = 'No feedback yet';

// Оbject initial value
const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
};

// initial value for useState
const getInitialFeedback = () => {
  const storedFeedback = window.localStorage.getItem('feedback');
  return storedFeedback !== null ? JSON.parse(storedFeedback) : initialState;
};


const App = () => {
  
  // useState
  const [feedback, setFeedback] = useState(getInitialFeedback);

  // useEffect and data storage in localStorage
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // Options update
  const updateOptions = feedbackType => {
    setFeedback(feedback => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  // Options total
  const totalOptions = feedback.good + feedback.neutral + feedback.bad;

  // Options reset
  const resetOptions = () => {
    setFeedback(initialState);
  };

  return (
    <div className={css.container}>
      <Description heading={heading} paragraph={paragraph} />
      <Options
        updateFeedback={updateOptions}
        resetFeedback={resetOptions}
        totalFeedback={totalOptions}
      />
      {totalOptions !== 0 ? (
        <Feedback feedbackItems={feedback} totalFeedback={totalOptions} />
      ) : (
        <Notification notification={noFeedback} />
      )}
    </div>
  );
};

export default App;
