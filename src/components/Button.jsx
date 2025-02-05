import PropTypes from "prop-types";

function Button({ clickTheButton, count }) {
  return (
    <>
      <button onClick={clickTheButton}>Count is {count}</button>
    </>
  );
}

export default Button;

Button.propTypes = {
    count: PropTypes.number,
    clickTheButton: PropTypes.func,
}