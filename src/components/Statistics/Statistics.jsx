import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positive }) => (
  <div>
    <p className={css.statistics}>Good: {good}</p>
    <p className={css.statistics}>Neutral: {neutral}</p>
    <p className={css.statistics}>Bad: {bad}</p>
    <p className={css.statistics}>Total: {total}</p>
    <p className={css.statistics}>Positive feedback: {positive}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string.isRequired,
};
