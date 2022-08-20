import { useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";
import Title from "../Components/Title";

const Home = () => {
  const allBlogs = useSelector((state) => state.all);
  return (
    <div>
      <Title title={"ALL BLOGS ARE HERE"}>
        Don't forget to search your favorite blog . You Can Search by Author
        Name and blog title,also Catagories. You can find all blogs here.
      </Title>
      <div className="grid sm:grid-cols-2 gap-8 mx-2 sm:mx-5 my-10">
        {allBlogs
          .slice()
          .sort((a, b) => {
            return 0.5 - Math.random();
          })
          .map((blog) => (
            <BlogCard key={Math.random()} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Home;
