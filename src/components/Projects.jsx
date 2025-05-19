import Cecicat from "../assets/cecicat.jpg";
import Ammdvs from "../assets/ammdvs.jpg";

export default function Projects() {
  return (
    <div className="scroll-mt-16 py-12" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">Projetos</h2>
        <p className="mb-10">
          Aqui estão alguns dos projetos que desenvolvi nos últimos tempos.
          Clique para ver mais detalhes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="https://cecicat.com.br/" target="_blank" className="group block">
            <img
              src={Cecicat}
              alt="Projeto Cecicat"
              className="rounded-lg shadow-md group-hover:opacity-90 transition w-full h-4/5 object-cover"
            />
            <p className="mt-2 text-lg font-medium text-center">
              Cecicat
            </p>
          </a>

          <a href="https://ammadvs.com.br/" target="_blank" className="group block">
            <img
              src={Ammdvs}
              alt="Projeto Advs Advogados"
              className="rounded-lg shadow-md group-hover:opacity-90 transition w-full h-4/5 object-cover"
            />
            <p className="mt-2 text-lg font-medium text-center">
              Advs Advogados
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
