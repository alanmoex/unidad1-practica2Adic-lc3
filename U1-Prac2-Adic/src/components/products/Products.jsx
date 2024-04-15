import Product from "../product/product";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((name, index) => (
        <li key={index}>
          <Product name={name} />
        </li>
      ))}
    </ul>
  );
};

export default Products;

Products.propTypes = {
  products: PropTypes.array,
};
