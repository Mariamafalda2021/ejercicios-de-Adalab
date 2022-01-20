import { Route, Link, Switch } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Ir al inicio</Link>
                    </li>
                    <li>
                        <Link to="/Overview" className="link" id="contact-link" target="_blank">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Repositories" className="link" id="contact-link" target="_blank">Repositories</Link>
                    </li>
                    <li>
                        <Link to="/Packages" className="link" id="contact-link" target="_blank">Packages</Link>
                    </li>
                    <li>
                        <Link to="/People" className="link" id="contact-link" target="_blank">People</Link>
                    </li>
                    <li>
                        <Link to="/Teams" className="link" id="contact-link" target="_blank">Teams</Link>
                    </li>
                    <li>
                        <Link to="/Projects" className="link" id="contact-link" target="_blank">Projects</Link>
                    </li>
                    <li>
                        <Link to="/Settings" className="link" id="contact-link" target="_blank">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;