import './Header.scss'
import { Link, BrowserRouter } from 'react-router-dom'
import Logo from '../../Assets/logo.svg'

function Header() {
    return (
        <nav className="nav" data-testid="headerNav">
            <BrowserRouter>
                <Link to="/home">
                    <img
                        src={Logo}
                        className="nav__img"
                        alt=""
                        data-testid="logo"
                    />
                </Link>
            </BrowserRouter>
            <div data-testid="headerMenu">
                <BrowserRouter>
                    <Link to="/home" className="nav__link">
                        Accueil
                    </Link>
                </BrowserRouter>
                <BrowserRouter>
                    <Link to="/apropos" className="nav__link">
                        À Propos
                    </Link>
                </BrowserRouter>
            </div>
        </nav>
    )
}
export default Header
