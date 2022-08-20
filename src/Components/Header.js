import Search from "./Search";

export default function NavBar() {
  return (
    <nav className="bg-slate-50 shadow-md px-3 my-10 mx-2 top-0 sm:mx-5 sticky z-40">
      <div className="flex flex-col sm:flex-row justify-between py-3 items-center  gap-5">
        <a
          href="/"
          className="text-2xl font-bold tracking-wider text-slate-500 flex-1 sm:basis-1/3 md:basis-1/4 uppercase"
        >
          Blogger's Base
        </a>
        <Search />
      </div>
    </nav>
  );
}
