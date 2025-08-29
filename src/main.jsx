import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import Post from "./Pages/Post.jsx";
import PostsBlog from "./Pages/PostsBlog.jsx";
import NotFound from "./Pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<PostsBlog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
