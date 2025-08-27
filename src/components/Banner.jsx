import { Linkedin } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              Olá, eu sou o Henrique{" "}
              <span className="animate-wave inline-block">👋</span>
            </h1>

            <div className="typewriter mb-8">
              <p className="text-xl md:text-3xl text-gray-300 font-light max-w-fit mx-auto">
                Desenvolvedor Front-end
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <a
                href="https://linkedin.com/in/henrique-julio-cestaro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Conecte-se no LinkedIn
              </a>

              <a
                href="#projects"
                className="px-8 py-4 border-2 border-amber-500 text-amber-400 font-medium rounded-lg hover:bg-amber-500/10 transition-all duration-300"
              >
                Ver Meus Projetos
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
