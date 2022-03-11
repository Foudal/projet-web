import './style.css';
import NavItem from './NavItem';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Login from './Login';
import Inscription from './Inscription';



function NavBar() {
    return (
        <nav className='navbar'>
            <Logo />
            <SearchBar />
            <ul className='list'>
                <Login />
                <Inscription />
                <NavItem text="!" />
            </ul>
        </nav>
    );
}

export default NavBar;
