import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
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