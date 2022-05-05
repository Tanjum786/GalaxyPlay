import "./App.css";
import { Footer, Navbar } from "./Components";
import { Routers } from "./Router/Routers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
