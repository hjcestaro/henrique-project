import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ArrowLeft, CalendarDays, Clock, Share2 } from "lucide-react";

export default function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: "personalBlog",
          "fields.slug[in]": slug,
          limit: 1,
        });

        if (response.items.length > 0) {
          setPost(response.items[0]);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/404", { replace: true });
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Post não encontrado</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative">
        {post.fields.image?.fields?.file?.url && (
          <div className="h-64 md:h-96 w-full overflow-hidden">
            <img
              src={`https:${post.fields.image.fields.file.url}`}
              alt={post.fields.image.fields.title || post.fields.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate(-1)}
              className="absolute top-6 left-4 md:left-6 flex items-center text-white hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="mr-2" />
              Voltar
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            {post.fields.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <CalendarDays className="w-5 h-5 mr-2" />
              <span>
                {new Date(post.fields.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              {post.fields.readingTime && (
                <>
                  <span className="mx-3">•</span>
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.fields.readingTime} min de leitura</span>
                </>
              )}
            </div>

            <button
              onClick={handleShare}
              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              aria-label="Compartilhar post"
            >
              <Share2 className="w-5 h-5 mr-2" />
              {isCopied ? "Link copiado!" : "Compartilhar"}
            </button>
          </div>

          {post.fields.excerpt && (
            <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-8 border-l-4 border-amber-500 pl-4 py-2">
              {post.fields.excerpt}
            </p>
          )}
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-amber-600 dark:prose-a:text-amber-400 hover:prose-a:text-amber-700 dark:hover:prose-a:text-amber-500 prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-blockquote:border-l-amber-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800 prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-r-lg">
          {documentToReactComponents(post.fields.content)}
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-500 font-medium"
            >
              <ArrowLeft className="mr-2" />
              Voltar para o blog
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
            >
              <Share2 className="mr-2" />
              Compartilhar post
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
