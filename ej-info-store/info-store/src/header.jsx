import styles from "./header.module.css";

function Header() {
    return (
       <header>
            <h1 className={styles.title}>Info Store</h1>
       </header>
    )
}

export default Header;