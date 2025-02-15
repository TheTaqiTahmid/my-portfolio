import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await import(`../assets/blogs/${slug}.md`);
        const response = await fetch(post.default);
        const text = await response.text();
        setContent(text);
        
        // const meta = await import(`../content/metadata/${slug}.json`);
        // setMetadata(meta.default);
      } catch (error) {
        console.error("Error loading blog post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!content) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      {/* <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <div className="text-gray-500 mb-8">{metadata.date}</div> */}
      <div className="prose prose-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};