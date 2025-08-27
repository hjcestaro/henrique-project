import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Code, Book, Mail, Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "/", icon: <Home size={18} /> },
    { label: "Sobre", href: "#sobre", icon: <User size={18} /> },
    { label: "Projetos", href: "#projects", icon: <Code size={18} /> },
    { label: "Blog", href: "#blog", icon: <Book size={18} /> },
    { label: "Contato", href: "#contato", icon: <Mail size={18} /> },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent flex items-center"
          onClick={closeMenu}
        >
          <span className="mr-2">{"</>"}</span> Henrique
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 flex items-center"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>

  
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 flex items-center"
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
    </>
  );
}
