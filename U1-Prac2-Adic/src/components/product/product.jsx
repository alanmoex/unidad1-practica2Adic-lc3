import PropTypes from "prop-types";

const Product = ({ name }) => {
  return <>{name}</>;
};

export default Product;

Product.propTypes = {
  name: PropTypes.string,
};
