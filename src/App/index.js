import './style.css';
import NavBar from '../NavBar';
import PostMessage from '../PostMessage';

function App() {
    return (
        <>
            <div className='navcontainer'>
                <NavBar />
            </div>
            <div className='mainpage'>
                <PostMessage />
            </div>
        </>
    );
}

export default App;
