import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import classNames from "classnames";

export function NavItem({ title, link, index }) {
  const currentPath = useLocation().pathname;
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: link === currentPath,
      })}
    >
      <Link to={link}>
        <b>{String(index).padStart(2, "0")}</b>
        {title}
      </Link>
    </li>
  );
}
