import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const is404 =
    pathname === "/404" || pathname === "*" || pathname.startsWith("/404");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (is404) return null;

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Grid layout melhorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Seção de perfil */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Henrique Julio Cestaro
              </span>
            </h3>
            <p className="mb-6 max-w-md text-gray-400 leading-relaxed">
              Desenvolvedor Front-end especializado em criar experiências
              digitais modernas, responsivas e acessíveis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/henrique-julio-cestaro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/hjcestaro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:hjcestaro@hotmail.com"
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Henrique Julio Cestaro. Todos os
            direitos reservados.
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            Feito com <span className="text-amber-500 mx-1">❤️</span> e React
          </p>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-amber-500/25 z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
