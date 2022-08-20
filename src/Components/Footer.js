import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const cat = useSelector((state) => [
    ...new Set(state.all.map((item) => item.cat)),
  ]);

  return (
    <footer className="bg-slate-50 shadow-md px-3 py-10 lg:p-5 my-10 mx-2 top-0 sm:mx-5 sticky z-40">
      <div className="flex flex-col lg:flex-row justify-between py-3 items-center  gap-5">
        <a
          href="/"
          className="text-2xl font-bold tracking-wider text-slate-500 flex-1 md:basis-1/3 uppercase"
        >
          Blogger's Base
        </a>
        <div className="flex-1 md:basis-2/3  flex gap-2 text-center ">
          {cat.map((c) => (
            <Link
              className="flex-1 capitalize bg-slate-300 rounded py-1 px-2"
              key={Math.random()}
              to={`/catagories/${c}`}
            >
              {c}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
