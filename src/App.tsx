import { Router } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
