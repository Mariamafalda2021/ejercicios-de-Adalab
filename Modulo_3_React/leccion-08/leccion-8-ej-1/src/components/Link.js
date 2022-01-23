const Link = (props) => {
    return (
        <li className="menu-item"><a className="menu-link" href={props.href}>{props.text}</a></li>

    )
}
export default Link;