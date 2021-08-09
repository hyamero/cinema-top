/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

const Navbar = ({ setDrinks, setSearchValue }) => {
  return (
    <nav
      className="Navbar container"
      css={css`
        font-family: "Playfair Display", serif;
        width: 85%;
        height: 6rem;
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
        border-bottom: #fff 1px solid;

        h3 {
          font-size: 2rem;
          color: #fff;
          font-style: italic;
          position: relative;
          top: 15px;
          left: 5px;
        }

        h4 {
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: #fff;
          position: relative;
          top: 30px;
        }
      `}
    >
      <Link to="/" onClick={() => setSearchValue("")}>
        <h3>boisson</h3>
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setSearchValue("");
          setDrinks([]);
        }}
      >
        <h4>drink with us</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
