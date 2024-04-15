import Family from "./components/family/Family";
import Persons from "./components/persons/Persons";
import Products from "./components/products/Products";

const products = ["table", "couch", "chair1", "chair2"];
const names = ["Parker", "Simmons", "Lewis", "Poe"];
const persons = [
  { name: "Juan", age: 26 },
  { name: "Gabriel", age: 27 },
  { name: "Valentina", age: 22 },
  { name: "Paula", age: 25 },
  { name: "Andrés", age: 20 },
];

function App() {
  const personsAgeSorted = persons.sort(
    (person1, person2) => person1.age - person2.age
  );

  return (
    <>
      <h2>Productos:</h2>
      <Products products={products}></Products>
      <h2>Nombres con P:</h2>
      <Persons names={names}></Persons>
      <h2>Familiares:</h2>
      <Family persons={personsAgeSorted}></Family>
    </>
  );
}

export default App;
