import { BrowserRouter } from "react-router";
import "./App.css";
import "./styles/index.css";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
