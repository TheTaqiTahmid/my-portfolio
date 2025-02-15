import { BlogCard } from "./BlogCard";

export const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          slug={post.slug}
          date={post.date}
        />
      ))}
    </div>
  );
};