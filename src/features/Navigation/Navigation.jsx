import { Link } from 'react-router-dom';
import './navigation.style.css'

const Navigation = () => {

    return(
        <div className='portfolio_navigation'>
            <Link to={{pathname: '/'}}>Home</Link>
            <Link to={{pathname: '/about'}}>About</Link>
            <Link to={{pathname: '/works'}}>Works</Link>
            <Link to={{pathname: '/contact'}}>Contact</Link>
        </div>
    )
}

export default Navigation;