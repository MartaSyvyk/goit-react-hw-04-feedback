import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveGood, onLeaveNeutral, onLeaveBad }) => (
  <div>
    <button type="button" className={css.button} onClick={onLeaveGood}>
      good
    </button>
    <button type="button" className={css.button} onClick={onLeaveNeutral}>
      neutral
    </button>
    <button type="button" className={css.button} onClick={onLeaveBad}>
      bad
    </button>
  </div>
);

FeedbackOptions.propType = {
  onLeaveGood: PropTypes.object.isRequired,
  onLeaveNeutral: PropTypes.object.isRequired,
  onLeaveBad: PropTypes.object.isRequired,
};
