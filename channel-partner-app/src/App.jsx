import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;