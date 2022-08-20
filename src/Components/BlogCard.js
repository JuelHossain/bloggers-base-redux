import { Link } from "react-router-dom";
export default function BlogCard({ blog }) {
  const {
    img,
    cat,
    des,
    title,
    author: { avatar, name } = {},
    posted,
  } = blog ?? {};

  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden text-slate-600 bg-slate-50 hover:bg-slate-100 duration-200 hover:shadow-sm">
      <Link to={`/blog/${title}`} className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={img} alt={title} />
      </Link>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium">
            <Link
              to={`/catagories/${cat}`}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 capitalize"
            >
              {cat}
            </Link>
          </p>
          <Link to={`/blog/${title}`} className="block mt-1">
            <p className="text-xl font-semibold ">{title}</p>
          </Link>
          <p className="pr-10 line-clamp-2">{des}</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            {avatar ? (
              <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            )}
          </div>
          <div className="ml-3">
            <Link
              to={`/author/${name}`}
              className="text-sm font-medium  hover:underline capitalize"
            >
              {name}
            </Link>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{posted}</time>
              <span aria-hidden="true"> &middot; </span>
              <span> {Math.round(Math.random() * 60) + 1} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
