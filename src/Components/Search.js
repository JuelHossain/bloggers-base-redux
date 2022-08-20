import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterBySearch } from "../Redux/searchResult/actions";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.all);
  const searchResult = useSelector((state) => state.searchResult);

  useEffect(() => {
    if (search === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
  }, [search]);

  const debounce = useCallback((fn) => {
    let timer;
    return (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, 400);
    };
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(filterBySearch(e.target.value, allBlogs));
  };
  const handleDebounce = debounce(handleChange);
  const searchRef = useRef(null);
  return (
    <div className=" flex items-center  mx-auto bg-slate-500 w-full rounded-md text-sm ring-emerald-200 flex-1 basis-2/4 ">
      <input
        ref={searchRef}
        className="outline-none border-none bg-slate-200 rounded-l-md h-full w-full px-4 py-2 text-xl text-slate-500 placeholder:text-slate-500/80  "
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleDebounce}
      />
      <button>
        {searchResult.length ? (
          <span className="px-5 py-6 text-xl text-white">
            {search === "" || searchResult.length}
          </span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        )}
      </button>
      {searching && (
        <div className="absolute top-36 sm:top-20 md:top-14 p-2 md:p-10 left-0 w-full   flex flex-col gap-2  backdrop-blur-0 z-[999] ">
          <div className=" overflow-auto relative p-4 sm:p-10 bg-white flex flex-col gap-3 rounded max-h-96 shadow-md">
            <button
              onClick={() => {
                searchRef.current.value = "";
                setSearch("");
              }}
              className="fixed bottom-0 right-0  md:top-8 md:right-8 md:bottom-auto text-red-500 p-1 bg-white border shadow rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {searchResult.length > 0 ? (
              searchResult.map((blog) => {
                return (
                  <Link
                    key={Math.random()}
                    onClick={() => {
                      searchRef.current.value = "";
                      setSearch("");
                    }}
                    to={`blog/${blog.title}`}
                    className="bg-slate-50 shadow-md p-5 text-lg flex gap-2 items-center justify-between"
                  >
                    <p>{blog.title}</p>
                    <p className=" bg-violet-200 px-2 rounded text-sm capitalize ">
                      {blog.author.name}
                    </p>
                  </Link>
                );
              })
            ) : (
              <div className="bg-slate-50 shadow-md p-5 text-red-500">
                No Result Has Been Found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
