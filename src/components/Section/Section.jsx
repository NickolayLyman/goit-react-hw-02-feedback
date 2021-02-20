import PropTypes from 'prop-types';
import st from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={st.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
