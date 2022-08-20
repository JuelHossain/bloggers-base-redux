import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header";
import Author from "./pages/Authro";
import Blog from "./pages/Blog";
import Catagories from "./pages/Catagories";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-2 text-slate-500">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:title" element={<Blog />} />
        <Route path="/author/:name" element={<Author />} />
        <Route path="/catagories/:cat" element={<Catagories />} />
      </Routes>
      <Footer />
    </div>
  );
}
