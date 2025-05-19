import Image from "../assets/imgPerfil.jfif";

export default function Sobre() {
  return (
    <div
      className="container mx-auto px-4 max-w-7xl py-12 scroll-mt-16"
      id="sobre"
    >
      <h2 className="text-3xl font-bold mb-4">Quem sou eu</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <p className="text-lg leading-relaxed">
          Me chamo Henrique, sou desenvolvedor front-end com mais de 5 anos de
          experiência na área e outros 5 anos atuando em suporte ao cliente.
          <br />
          Minha trajetória na programação começou com a criação de temas em
          WordPress, o que me levou à minha primeira oportunidade na empresa
          Hive. Mais tarde, atuei como desenvolvedor Next.js na Naturalbot, onde
          participei da construção de um sistema SaaS completo — desde a criação
          do layout até a integração com o backend. Trabalhei com chamadas de
          API, manipulação de dados e integração com banco de dados, sempre
          focando em performance e usabilidade.
          <br />
          Atualmente, minhas principais ferramentas de trabalho incluem React,
          Next.js, TypeScript, Tailwind CSS, Vite e Contentful. Busco
          constantemente evoluir como desenvolvedor, explorando boas práticas,
          animações modernas e interfaces acessíveis.
          <br />
          Além da programação, sou apaixonado por aprender novos idiomas e leitura. Tenho o
          hábito de estudar todos os dias e mantenho uma meta pessoal de ler ao
          menos 6 livros por ano.
        </p>
        <img
          src={Image}
          alt="Imagem Henrique"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
