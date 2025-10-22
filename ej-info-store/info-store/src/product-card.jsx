import styles from "./product-card.module.css";

function ProductCard(props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt={props.title} className={styles.image} />
      </div> 

      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
      
        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${props.price}</span>
          </div>

          <button
             className={styles.addButton}
             onClick={props.onAddToCart}
             aria-label="Añadir al carrito"
          >
            <ShoppingCart size={20} />
            "Añadir al carrito"
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;