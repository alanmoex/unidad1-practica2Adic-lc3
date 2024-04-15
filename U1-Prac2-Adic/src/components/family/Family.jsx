import PropTypes from "prop-types";
import FamilyMember from "../familyMember/FamilyMember";

const Family = ({ persons }) => {
  return (
    <>
      {persons.map((person, index) => (
        <FamilyMember key={index} name={person.name} age={person.age} />
      ))}
    </>
  );
};

export default Family;

Family.propTypes = {
  persons: PropTypes.array,
};
