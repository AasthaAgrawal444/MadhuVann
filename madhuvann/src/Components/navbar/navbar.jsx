import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import  "./navbar.css";

const Navbar = () => {
  return (
    <nav className={"nav_wrapper"}>
      <div className={"nav_container"}>
        <div className={"nav_box1"}>
          <FaBars className={"bar_icon_size"} />
        </div>
        <div className={"nav_box2"}>
          <img src={logo} alt="logo" />
        </div>
        <div className={"nav_box3"}>
          <div className={"nav_search_con"}>
            <input
              type="text"
              placeholder="Search here..."
              className={"nav_search_con_input"}
            />
            <span>
              <CiSearch color="#fff" className={"search_icon_size"} />
            </span>
          </div>
          <div>
            <img src={menu} alt="menu" className={"nav_box3_menu_img"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
