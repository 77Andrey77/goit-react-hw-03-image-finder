import s from '../Button/Button.module.css';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={s.Button}>
      Loade more
    </button>
  );
}
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
