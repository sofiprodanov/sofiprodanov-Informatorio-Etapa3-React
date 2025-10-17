import styles from "./product-card.module.css";

function ProductCard(props) {
  return (
    <article>
      <h2 className={styles.title}>{props.title}</h2>
      <p>{props.description}</p>
      <p>${props.price}</p>
    </article>
  );
}

export default ProductCard; //lo que se importa por defecto es ese product-card.jsx 