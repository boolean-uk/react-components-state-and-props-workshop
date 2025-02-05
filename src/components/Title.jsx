import PropTypes from "prop-types";

function Title({ name }) {
    
    return (
      <>
        <h1>{name}&apos;s Name Reverser App</h1>
      </>
    );
}

export default Title

Title.propTypes = {
    name: PropTypes.string,
}