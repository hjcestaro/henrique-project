import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "personalBlog",
        "fields.slug[in]": slug,
      })
      .then((res) => {
        if (res.items.length > 0) setPost(res.items[0]);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, [slug]);

  if (!post)
    return <p className="p-6 text-center text-white">Carregando post...</p>;

  return (
    <main className="min-h-screen post">
      <div className="mx-auto">
        {post.fields.image?.fields?.file?.url && (
          <img
            src={post.fields.image.fields.file.url}
            alt={post.fields.image.fields.title || post.fields.title}
            className="w-full h-[400px] object-cover mb-10"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-center px-2">
          {post.fields.title}
        </h1>

        <p className="text-center text-sm text-gray-500 mb-8">
          Publicado em {new Date(post.fields.date).toLocaleDateString("pt-BR")}
        </p>

        <article className="px-6 md:px-12 py-10 prose prose-lg max-w-none mx-auto prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-lg prose-img:shadow-sm">
          {documentToReactComponents(post.fields.content)}
          <div className="mt-5">
            <Link to="/" className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white">
            ← Voltar
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
