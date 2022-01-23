import Link from "./Link";

const Header = () => {
    return (
        <header className="header">
            <a href="https://adalab.es"><img className="logo" alt="logo-adalab" /></a>
            <nav>
                <ul className="menu">
                    <Link text='Blog' href="https://adalab.es/blog/" tab="openInNewTab" />
                    <li className="menu-item"><a className="menu-link" href="https://adalab.es/contacto/">Contacto</a></li>
                </ul>

            </nav>

        </header>
    );
};

export default Header;