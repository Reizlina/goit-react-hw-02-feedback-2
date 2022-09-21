import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ onButtonClick, buttonName }) {
  const listItem = buttonName.map(button => (
    <li key={button}>
      <button className={styles.btn} onClick={() => onButtonClick(`${button}`)}>
        {button}
      </button>
    </li>
  ));
  return <ul className={styles.list}>{listItem}</ul>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
