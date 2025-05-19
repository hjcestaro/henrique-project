export default function Banner() {
  return (
    <div className="banner flex justify-center items-center text-white text-center px-4">
      <div className="container mx-auto max-w-7xl relative">
        <h2 className="text-lg md:text-xl mb-2">Olá, bem-vindo!</h2>
        <h1 className="text-2xl md:text-4xl font-light leading-snug">
          Me chamo <span className="font-bold">Henrique</span>,
          <br className="hidden md:block" />
          sou desenvolvedor <span className="font-bold">Front End</span>
        </h1>
        <a
          href="https://www.linkedin.com/in/henrique-julio-cestaro/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-950 text-white px-4 py-2 rounded-md hover:bg-amber-900 mt-4"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
