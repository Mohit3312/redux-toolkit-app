import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Store from "./store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
