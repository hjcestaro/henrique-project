import { useEffect, useState } from "react";
import { client } from "../contentful";
import { Link, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  ArrowRight,
  Search,
  ArrowLeft,
} from "lucide-react";

export default function PostsBlog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    client
      .getEntries({
        content_type: "personalBlog",
        order: "-fields.date",
      })
      .then((res) => {
        setPosts(res.items);
        setFilteredPosts(res.items);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = posts;

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.fields.excerpt &&
            post.fields.excerpt
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(result);
  }, [searchTerm, posts]);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-500 mb-6 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </button>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold pb-4 bg-gradient-to-r from-gray-800 to-amber-600 dark:from-white dark:to-amber-400 bg-clip-text text-transparent">
            Blog & Artigos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore meus artigos sobre desenvolvimento frontend, tendências de
            tecnologia e melhores práticas.
          </p>
        </div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-center p-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-amber-500 mb-4">
              <Search size={48} className="mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {searchTerm
                ? "Nenhum resultado encontrado"
                : "Nenhum post publicado ainda"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {searchTerm
                ? "Tente buscar com outros termos."
                : "Volte em breve para conferir novos conteúdos."}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400">
                Mostrando{" "}
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  {filteredPosts.length}
                </span>
                {filteredPosts.length === 1 ? " artigo" : " artigos"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.sys.id}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
                >
                  {post.fields.image?.fields?.file?.url && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`https:${post.fields.image.fields.file.url}`}
                        alt={post.fields.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>
                        {new Date(post.fields.date).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                      {post.fields.readingTime && (
                        <>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.fields.readingTime} min</span>
                        </>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.fields.title}
                    </h2>

                    {post.fields.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                        {post.fields.excerpt}
                      </p>
                    )}

                    <Link
                      to={`/blog/${post.fields.slug}`}
                      className="inline-flex items-center mt-auto text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-500 font-medium transition-colors group/link"
                    >
                      Ler artigo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
