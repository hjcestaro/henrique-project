import { useEffect, useState } from "react";
import { client } from "../contentful";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "personalBlog",
      })
      .then((res) => {
        setPosts(res.items);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-7xl scroll-mt-16" id="blog">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-3 gap-8 py-8">
        {posts.map((post) => (
          <div
            key={post.sys.id}
            className="border rounded-2xl shadow-md p-5 flex flex-col items-center transition duration-300 hover:shadow-lg"
          >
            {(post.fields.image?.fields?.file)
              ?.url && (
              <img
              src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.title}
                className="rounded-md mb-4 w-full h-[200px] object-cover"
              />
            )}

            <h2 className="text-xl font-semibold text-white mb-2 text-center">
              {post.fields.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              {new Date(post.fields.date).toLocaleDateString("pt-BR")}
            </p>
            <Link
              to={`/blog/${post.fields.slug}`}
              className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Ler mais →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
