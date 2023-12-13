import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <div className={styles.nav_container}>
        <div className={styles.nav_box1}>
          <FaBars className={styles.bar_icon_size} />
        </div>
        <div className={styles.nav_box2}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.nav_box3}>
          <div className={styles.nav_search_con}>
            <input
              type="text"
              placeholder="Search here..."
              className={styles.nav_search_con_input}
            />
            <span>
              <CiSearch color="#fff" className={styles.search_icon_size} />
            </span>
          </div>
          <div>
            <img src={menu} alt="menu" className={styles.nav_box3_menu_img} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
