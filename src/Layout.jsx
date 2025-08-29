import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout() {
  const location = useLocation();
  
  const isBlogPage = location.pathname.startsWith("/blog");

  return (
    <>
      {!isBlogPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
