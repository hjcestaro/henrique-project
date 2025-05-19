import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const is404 = pathname === "/404" || pathname === "*" || pathname.startsWith("/404");

  if (is404) return null;

  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>Feito com ❤️ por Henrique Julio Cestaro </p>
    </footer>
  );
}
