import ProductCard from "./product-card";
import Header from "./header";
import ProductList from "./product-list";
import styles from "./app.module.css"


const img = "https://static.hendel.com/media/catalog/product/cache/b866fd8d147dcce474dc8744e477ca66/5/4/54366_rs_0.jpg"

const products = [
  {
    id: 1,
    title: "Celular",
    description: "Tremendo celu",
    price: 24,
    image: img,
  },
  {
    id: 2,
    title: "Telefono",
    description: "Tremendo telefono",
    price: 24,
    image: img,
  },
  {
    id: 3,
    title: "Mate",
    description: "Tremendo Mate",
    price: 24,
    image: img,
  },
  {
    id: 4,
    title: "Televisor",
    description: "Tremenda tele",
    price: 24,
    image: img,
  },

]

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <ProductList title="Productos mas vendidos">
          {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))},
        </ProductList>
        <ProductList title="Productos deseados">
          {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))},
        </ProductList>
      </main>
    </div>
  );
}

export default App;