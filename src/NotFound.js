import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>sorry</h1>
      <p>Page not found !</p>
      <Link to="/">back to home page...</Link>
    </div>
  );
};

export default NotFound;
