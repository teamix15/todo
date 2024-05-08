import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./features/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
