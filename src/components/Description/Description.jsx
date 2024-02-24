// library  prop-types
import PropTypes from 'prop-types';

const Description = ({ heading, paragraph }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </>
  );
};

export default Description;

// propTypes
Description.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
