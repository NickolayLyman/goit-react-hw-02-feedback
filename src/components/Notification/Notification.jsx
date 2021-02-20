import PropTypes from 'prop-types';
import st from './Notification.module.css';

const Notfication = ({ message }) => {
  return <h2 className={st.title}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notfication;
