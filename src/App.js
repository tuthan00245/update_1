import RouterConfig from "./router/RouterConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <RouterConfig></RouterConfig>
      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  );
}

export default App;
