import './style.css';
import img from './logo.svg'

function Logo() {
    return (
        <a href='/' className='logo'>
            <img height={40} src={img} alt='logo'></img>
        </a>
    );
}

export default Logo;