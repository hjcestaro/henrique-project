import { ArrowUpRight, Github } from "lucide-react";
import Cecicat from "../assets/cecicat.png";
import Ammdvs from "../assets/ammdvs.png";
import Filmes from "../assets/filmes.png";
import Lp from  "../assets/lp.png"

export default function Projects() {
  const projects = [
    {
      title: "Cecicat",
      description:
        "Plataforma institucional desenvolvida com React e Tailwind CSS, com foco em performance e SEO.",
      tags: ["Wordpress"],
      image: Cecicat,
      link: "https://cecicat.com.br/",
    },
    {
      title: "Advs Advogados",
      description:
        "Website profissional para escritório de advocacia com design moderno e acessível.",
      tags: ["Wordpress"],
      image: Ammdvs,
      link: "https://ammadvs.com.br/",
    },
    {
      title: "Buscador de filmes - React Project",
      description: "Site criado em React JS para busca de filmes",
      tags: ["React.js", "TypeScript", "Tailwind"],
      image: Filmes,
      link: "https://filme-busca.vercel.app/",
      repo: "#", // Adicione link do GitHub se tiver
    },
    {
      title: "Landing page",
      description: "Landing page criada apenas com intuito de estudo",
      tags: ["Next.js", "Tailwind"],
      image: Lp,
      link: "https://project-boostflow.vercel.app/",
      repo: "#", // Adicione link do GitHub se tiver
    },
  ];

  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-16"
      id="projects"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Alguns dos trabalhos que desenvolvi com paixão e dedicação
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-amber-500/20 text-amber-500 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-amber-500 transition-colors"
                        aria-label="Código no GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-amber-500 transition-colors"
                      aria-label="Ver projeto"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Quer ver mais projetos ou discutir um potencial colaboração?
          </p>
          <a
            href="#contato" // Link para sua seção de contato
            className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}
