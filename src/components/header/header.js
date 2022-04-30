import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a className={styles.logo}></a>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.nav_link}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.nav_link}>Cashier</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.nav_link}>Help</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.nav_link}>History</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
