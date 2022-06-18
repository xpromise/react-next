import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./index.module.css";

interface NavLinkProps {
  href: string;
  children: string;
}

function NavLink({ href, children }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={router.asPath === href ? styles.routerLinkActive : styles.routerLink}>{children}</a>
    </Link>
  );
}

export default NavLink;
