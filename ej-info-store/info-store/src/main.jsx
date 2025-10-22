import ReactDOM from "react-dom/client";
import App from "./app";
import "./normalize.css";
import "./variables.css";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);