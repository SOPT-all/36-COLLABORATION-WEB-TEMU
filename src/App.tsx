import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import "./styles/global.css.ts";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
