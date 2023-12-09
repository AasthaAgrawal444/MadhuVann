import logo from "../Assets/logo_maduvan.svg";
import ham from "../Assets/hamburger.png";
import donate from "../Assets/donation (1).png";
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="Flex_bar">
      <div>
        <img src={ham} height="20px" />
      </div>
      <div>
        <img src={logo} height="95px"></img>
      </div>
      <div className="button">
        {" "}
        <div className="button_div">
                <Link to='/Donate'>
          <button>
            <img className="donate_icon" src={donate} height="35px" />
            <div className="button_label"> Donate</div>
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
