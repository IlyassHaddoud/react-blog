import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs/" + id)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not the ressources from server");
          }
          return res.json();
        })
        .then((data) => {
          setBlog(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 500);
  }, [id]);

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
