import "./scss/app.scss";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./Components/ScrollToTop";
import MainLayout from "./layouts/MainLayouts";
import NotFound from "./pages/NotFound";
import FoodItem from "./pages/FoodItem";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/menu/:id" element={<FoodItem />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
