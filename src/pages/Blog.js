import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Title from "../Components/Title";
import { filterByTitle } from "../Redux/filtered/actions";
const Blog = () => {
  const { title: ttl } = useParams();
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.all);
  const blogs = useSelector((state) => state.filtered[0]);
  const {
    img,
    title,
    des,
    cat,
    author: { avatar, name } = {},
    posted,
  } = blogs ?? {};

  useEffect(() => {
    // dispatching filter by title
    dispatch(filterByTitle(ttl, allBlogs));
  }, [dispatch, allBlogs, ttl]);

  return (
    <div className="mx-2 sm:mx-5 my-2 md:my-10 p-2 md:p-10 relative ">
      <Title title={`${title}`} />
      <p className=" relative top-10 bg-violet-200 mx-10 mb-5  rounded p-2 font-bold capitalize">
        {cat}
      </p>
      <img
        src={img}
        alt={title}
        className="w-full p-10 max-h-[80vw] object-cover"
      />
      <p className="text-lg tracking-wide px-10">{des}</p>
      <div className="mt-6 flex items-center flex-row-reverse gap-3 text-right ">
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
            <span> 6 min read </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
