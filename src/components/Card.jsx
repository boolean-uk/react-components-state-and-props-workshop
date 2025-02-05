import PropTypes from "prop-types";
import Button from "./Button";

function Card(props) {
  const clickTheButton = props.clickTheButton;
  const count = props.count;

  return (
    <>
      <div className="card">
        <Button clickTheButton={clickTheButton} count={count} />
      </div>
      <h6>The counter says: {count}</h6>
    </>
  );
}

export default Card;

Card.propTypes = {
    count: PropTypes.number,
    clickTheButton: PropTypes.func
}
