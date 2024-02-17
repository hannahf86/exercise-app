// RRD
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Workout Buddy</h1>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Nav;
