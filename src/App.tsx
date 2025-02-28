import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Blogs from "./assets/pages/Blogs";
import Gallery from "./assets/pages/Gallery";
import BlogDetail from "./assets/components/BlogDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
