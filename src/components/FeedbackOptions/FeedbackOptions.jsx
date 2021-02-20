import PropTypes from 'prop-types';
import st from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          className={st.btn}
          key={key}
          type="button"
          id={key}
          onClick={e => leaveFeedback(e)}
        >
          {key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
