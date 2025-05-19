import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./Pages/Post.jsx";
import Layout from "./Layout.jsx";
import NotFound from "./Pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><App /></Layout>} />
      <Route path="/blog/:slug" element={<Layout><Post /></Layout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);