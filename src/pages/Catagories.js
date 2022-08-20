import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import Title from "../Components/Title";
import { filterByCatagories } from "../Redux/filtered/actions";

const Catagories = () => {
  const { cat } = useParams();
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.all);
  const blogs = useSelector((state) => state.filtered);

  useEffect(() => {
    //  dispatching filter by catagories
    dispatch(filterByCatagories(cat, allBlogs));
  }, [dispatch, cat, allBlogs]);

  // getting all blogs;
  return (
    <div>
      <Title title={`All ${cat} blogs`}>
        Don't forget to search your favorite blog . You Can Search by Author
        Name and blog title,also Catagories. You can find all blogs here.
      </Title>
      <div className="grid sm:grid-cols-2 gap-8 mx-2 sm:mx-5 my-10">
        {blogs.map((blog, index) => (
          <BlogCard key={Math.random()} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Catagories;
