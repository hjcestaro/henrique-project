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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Henrique Julio Cestaro
              </span>
            </h3>
            <p className="mb-4">
              Desenvolvedor Front-end especializado em criar experiências
              digitais modernas, responsivas e acessíveis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/henrique-julio-cestaro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:seu.email@exemplo.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#banner"
                  className="hover:text-amber-500 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/#sobre"
                  className="hover:text-amber-500 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="hover:text-amber-500 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/#blog"
                  className="hover:text-amber-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/#contato"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Tecnologias
            </h4>
            <ul className="space-y-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Wordpress",
              ].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Henrique Julio Cestaro. Todos os
            direitos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Feito com <span className="text-amber-500">❤️</span> e React
          </p>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
