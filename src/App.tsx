import { BrowserRouter } from "react-router";
import "./App.css";
import "./styles/index.css";
import ScrollToTop from "./components/ScrollToTop";
import { MyProvider } from "./services";
import { MyDataProvider } from "./services/ctx/data.ctx";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { MyArialFolderProvider } from "./services/ctx/airial.ctx";

function App() {
  return (
    <MyDataProvider>
      <MyArialFolderProvider>
        <MyProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        </MyProvider>
      </MyArialFolderProvider>
    </MyDataProvider>
  );
}

export default App;
