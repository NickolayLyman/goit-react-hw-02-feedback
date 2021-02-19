import PropTypes from 'prop-types';

const Notfication = ({ message }) => {
  return <h3>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notfication;
