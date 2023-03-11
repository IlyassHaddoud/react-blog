import BlogList from "./BlogList";

import { useEffect, useState } from "react";

const Home = () => {
  const handleDelete = (id) => {
    const newblogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newblogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  return (
    <div className="home">
      <h1>All blogs</h1>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
