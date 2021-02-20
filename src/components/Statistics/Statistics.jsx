import PropTypes from 'prop-types';
import st from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={st.list}>
      <li className={st.listItem}>
        <p className={st.itemText}>
          Good:<span className={st.text}>{good}</span>
        </p>
      </li>
      <li className={st.listItem}>
        <p className={st.itemText}>
          Neutral:<span className={st.text}>{neutral}</span>
        </p>
      </li>
      <li className={st.listItem}>
        <p className={st.itemText}>
          Bad:<span className={st.text}>{bad}</span>
        </p>
      </li>
      <li className={st.listItem}>
        <p className={st.itemText}>
          Total:<span className={st.text}>{total}</span>
        </p>
      </li>
      <li className={st.listItem}>
        <p className={st.itemText}>
          Positive feedback:
          <span className={st.text}>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
