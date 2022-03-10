import './style.css';
import NavItem from './NavItem';
import Logo from './Logo';
import SearchBar from './SearchBar';

function NavBar() {
    return (
        <nav className='navbar'>
            <Logo />
            <SearchBar />
            <ul className='list'>
                <NavItem text='login' />
                <NavItem text='inscription' />
                <NavItem text='aide' />
            </ul>
        </nav>
    );
}

export default NavBar;
