import './style.css';

function NavItem(props) {
    return (
        <li className="list-item">
            <a href="/" className="item-link">
                {props.text}
            </a>
        </li>
    );
}

export default NavItem;
