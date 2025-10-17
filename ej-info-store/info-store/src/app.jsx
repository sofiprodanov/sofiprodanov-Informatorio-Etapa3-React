import ProductCard from "./product-card";
import Header from "./header";

function App() {
  return (
    <div>
      <Header />
      <ProductCard title="Celular" description="Tremendo celu" price={34}/>
      <ProductCard title="Computadora" description="Tremendo compu" />
      <ProductCard title="Remera" description="Tremenda remera" />
      <ProductCard title="Televisor" description="Tremendo tele"/>
    </div>
  );
}

export default App;