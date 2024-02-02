import styles from "./header.module.scss";
import Logo from "./Logo";
import Link from "next/Link";

export default function Header() {
  //gibberish2
  return (
    <header className={styles.header}>
      <a href="/">
        <Logo />
      </a>

      <nav className={styles.header_nav}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Works</Link>
      </nav>
    </header>
  );
}
