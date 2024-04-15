import PropTypes from "prop-types";

const FamilyMember = ({ name, age }) => {
  return (
    <>
      <h3>Nombre: {name}</h3>
      <p>edad: {age}</p>
    </>
  );
};

export default FamilyMember;

FamilyMember.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
