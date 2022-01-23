import Link from "./Link";

const Header = (props) => {
    return (
        <header className="header">
            <a href="https://adalab.es"><img className="logo" alt="logo-adalab" /></a>
            <nav>
                <ul className="menu">
                    <Link text='Blog' href="https://adalab.es/blog/" openInNewTab={false} />
                    <Link text='Contacto' href="https://adalab.es/contacto/" openInNewTab={true} />

                </ul>

            </nav>

        </header>
    );
};

export default Header;