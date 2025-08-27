import Image from "../assets/imgPerfil.jfif";

export default function Sobre() {
  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="sobre"
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quem sou eu
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative group w-full lg:w-1/3">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={Image}
              alt="Foto de Henrique"
              className="relative w-full h-auto rounded-xl shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:-translate-y-2 transition duration-300"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Sou Henrique, desenvolvedor front-end com mais de{" "}
                <span className="font-bold text-amber-600 dark:text-amber-400">
                  9 anos de experiência
                </span>{" "}
                na criação de interfaces modernas e funcionais.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    Minha jornada começou desenvolvendo temas para WordPress, o
                    que me levou à minha primeira oportunidade na Hive.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    Na Naturalbot, participei da construção de uma plataforma
                    SaaS desde o design até a integração com o backend — lidando
                    com APIs, bancos de dados e foco em performance e
                    acessibilidade.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    Atualmente, trabalho com tecnologias como{" "}
                    <span className="font-bold text-amber-600 dark:text-amber-400">
                      React, Next.js, TypeScript, Tailwind CSS
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "Fora das telas, estudo idiomas e mantenho o hábito diário da
                  leitura. Acredito que aprendizado constante é o que diferencia
                  bons profissionais de excelentes."
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "WordPress",
                "Acessibilidade",
                "Performance",
                "APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
