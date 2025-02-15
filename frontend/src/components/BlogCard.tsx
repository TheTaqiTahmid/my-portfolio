import { Link } from "react-router-dom";

export const BlogCard = ({ title, description, slug, date }) => {
  return (
    <Link to={`/blog/${slug}`} className="no-underline">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <div>
            <p className="text-sm text-gray-500">{date}</p>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};