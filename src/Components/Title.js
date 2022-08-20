

export default function Title({ title, children }) {
  return (
    <div className="text-center mx-2 sm:mx-5 px-2 sm:px-5">
      <h2 className="text-3xl tracking-tight font-extrabold  sm:text-4xl uppercase">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl  sm:mt-4">{children}</p>
    </div>
  );
}
