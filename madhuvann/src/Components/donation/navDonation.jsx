import logo from "../Assets/logo_maduvan.svg";
import ham from "../Assets/hamburger.png";
import "./navDonation.css";
import { Link } from "react-router-dom";

function NavDonate() {
  return (
    <div className="Flex_bars">
      <div className="hamb">
        <Link to="/about"><img src={ham} height="20px" alt="hamicon" /></Link>
      </div>
      <Link to="/">
        <div>
          <img className="logos" src={logo} alt="logo"></img>
        </div>
      </Link>
    </div>
  );
}

export default NavDonate;
