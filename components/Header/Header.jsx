import styles from "./header.module.scss";

import Link from "next/Link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Filipe</h1>
      <nav className={styles.header_nav}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Works</Link>
      </nav>
    </header>
  );
}
