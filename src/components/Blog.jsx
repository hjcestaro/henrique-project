import { useEffect, useState } from "react";
import { client } from "../contentful";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "personalBlog",
        order: "-fields.date", // Ordena por data mais recente
      })
      .then((res) => {
        setPosts(res.items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-16"
      id="blog"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meu Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Artigos sobre desenvolvimento, tecnologia e aprendizados
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum post encontrado
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.sys.id}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                {post.fields.image?.fields?.file?.url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https:${post.fields.image.fields.file.url}`}
                      alt={post.fields.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    <span>
                      {new Date(post.fields.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    {post.fields.readingTime && (
                      <>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.fields.readingTime} min de leitura</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {post.fields.title}
                  </h2>

                  {post.fields.excerpt && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.fields.excerpt}
                    </p>
                  )}

                  <div className="flex items-center mt-4">
                    <Link
                      to={`/blog/${post.fields.slug}`}
                      className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-500 font-medium transition-colors"
                    >
                      Ler artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Quer ver todos os artigos?
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Ver todos os posts
          </Link>
        </div>
      </div>
    </section>
  );
}
