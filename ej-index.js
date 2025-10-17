const title = React.createElement("h1", null, "Info Store"); //es lo mismo que poner React.createElement("h1", { children: "Info Store"})

/** const productCard = React.createElement("article", null, [
    React.createElement("h2", null, "Celular"),
    React.createElement("p", null, "Tremento celu amarillo"),
]);

const productCard1 = React.createElement("article", null, [
    React.createElement("h2", null, "Celular"),
    React.createElement("p", null, "Tremento celu amarillo"),
]);

const productCard2 = React.createElement("article", null, [
    React.createElement("h2", null, "Celular"),
    React.createElement("p", null, "Tremento celu amarillo"),
]);

const productCard3 = React.createElement("article", null, [
    React.createElement("h2", null, "Celular"),
    React.createElement("p", null, "Tremento celu amarillo"),
]);

const productCard4 = React.createElement("article", null, [
    React.createElement("h2", null, "Celular"),
    React.createElement("p", null, "Tremento celu amarillo"),
]);

const app = React.createElement("div", null, 
    [title, 
    productCard,
    productCard1,
    productCard2,
    productCard3,
    productCard4,
]);
*/
// En vez de todo lo comentado podemos hacer:

function ProductCard(props) {
    console.log(props);
    return React.createElement("article", null, [
        React.createElement("h2", {class: props.class}, props.title),
        React.createElement("p", null, "Tremendo celu amarillo"),
    ]);
}

const app = React.createElement("div", null, [
    title,
    React.createElement(ProductCard, { title: "Celular", description: "Tremendo celu", class: "red" }),
    React.createElement(ProductCard, { title: "Computadora", description: "Tremendo compu" }),
    React.createElement(ProductCard, { title: "Remera", description: "Tremendo remera" }),
    React.createElement(ProductCard, { title: "Televisor", description: "Tremendo televisor" }),

])


const container = document.querySelector("#root"); //Para agregar mas elementos, linea 4 y 5 no se toca ya que puede haber 1 solo root y el resto sale de ahi (como raiz)
const root = ReactDOM.createRoot(container);
root.render(app)
