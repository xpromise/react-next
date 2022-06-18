import NavLink from "../NavLink";

import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <NavLink href="/">首页</NavLink>
      <NavLink href="/pins">沸点</NavLink>
      <NavLink href="/course">课程</NavLink>
      <NavLink href="/news">资讯</NavLink>
    </div>
  );
}

export default Header;
