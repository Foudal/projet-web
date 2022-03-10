import './style.css';
import Icon from './icon.svg';

function SearchBar() {
    return (
        <div className='search-container'>
            <input className='searchTerm' placeholder='Recherchez...'>

            </input>

            <button type="submit" class="searchButton">
                <img src={Icon} alt='search'></img>
            </button>
        </div>
    );
}

export default SearchBar;