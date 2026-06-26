import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Aminities from "./components/aminities";
import Bookings from "./components/Bookings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/aminities" element={<Aminities />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
}

export default App;