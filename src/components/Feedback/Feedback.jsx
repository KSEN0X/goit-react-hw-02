// style
import css from './Feedback.module.css';
// library  prop-types
import PropTypes from 'prop-types';

// percentage of quantity feedback
const calcPositiveFeedback = (good, neutral, total) => {
  if (total === 0) {
    return 0;
  }

  return Math.round(((good + neutral) / total) * 100);
};


const Feedback = ({ feedbackItems, totalFeedback }) => {
  const positiveFeedback = calcPositiveFeedback(
    feedbackItems.good,
    feedbackItems.neutral,
    totalFeedback
  );

  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>Good: {feedbackItems.good}</li>
      <li className={css.feedbackItem}>Neutral: {feedbackItems.neutral}</li>
      <li className={css.feedbackItem}>Bad: {feedbackItems.bad}</li>
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positiveFeedback + '%'}</li>
    </ul>
  );
};

// export Feedback
export default Feedback;

// propTypes
Feedback.propTypes = {
  feedbackItems: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
};



