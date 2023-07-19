import { ProductProvider } from "./Context/ProductContext";
import { render } from "react-dom";
import App from "./App";

render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
