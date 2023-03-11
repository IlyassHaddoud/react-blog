import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Blog</div>
      <div className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Add blog</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
