import PropTypes from "prop-types";

const Person = ({ name }) => {
  return <>{name}</>;
};

export default Person;

Person.propTypes = {
  name: PropTypes.string,
};
