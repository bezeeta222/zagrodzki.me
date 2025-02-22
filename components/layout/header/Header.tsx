import Link from "next/link";

import { ThemeSwitcher } from "components/common/theme/ThemeSwitcher";
import { routes } from "data/routes";
import Logo from "public/svg/logo.svg";
import PaperPlane from "public/svg/paper-plane.svg";

import styles from "./header.module.scss";
import { Navbar } from "./navbar/Navbar";

export const Header = () => (
  <header className={styles.header}>
    <Link href="#main" className={styles.skip}>
      skip to content
    </Link>
    <Link href="/" className={styles.logo}>
      <span className="sr-only">home</span>
      <Logo />
    </Link>
    <Navbar routes={routes} />
    <div className={styles.right}>
      <label className={styles.theme}>
        <ThemeSwitcher />
      </label>
      <Link href="https://api.whatsapp.com/send?phone=60172822871" className={styles.contact}>
        Contact
        <PaperPlane />
      </Link>
    </div>
  </header>
);
