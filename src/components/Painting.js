import PropTypes from "prop-types";
import defaultJpg from "./default.jpg";

export default function Painting(props) {
  const { url = defaultJpg, title, author, price, quantity } = props;

  return (
    <>
      <img src={url} alt={title} width="360" />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: {price}</p>
      <p>
        Quantity: {quantity >= 10 ? "More than 10" : "running out of stock"}{" "}
      </p>
    </>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
