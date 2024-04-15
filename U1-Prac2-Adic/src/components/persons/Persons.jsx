import PropTypes from "prop-types";
import Person from "../person/Person";

const Persons = ({ names }) => {
  const namesWithP = names.filter((name) => name[0] === "P");
  return (
    <ul>
      {namesWithP.map((name, index) => (
        <li key={index}>
          <Person name={name} />
        </li>
      ))}
    </ul>
  );
};

export default Persons;

Persons.propTypes = {
  names: PropTypes.array,
};
