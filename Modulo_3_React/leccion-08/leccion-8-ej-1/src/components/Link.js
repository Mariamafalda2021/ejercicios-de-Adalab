const Link = (props) => {
    if (props.openInNewTab) {


        return (
            <li><a target="_blank" className="menu-link" href={props.href}>{props.text}</a></li>
        )
    }
    return (
        <li><a className="menu-link" href={props.href}>{props.text}</a></li>
    )
}
export default Link;