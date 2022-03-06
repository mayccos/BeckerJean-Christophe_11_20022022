import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/logo.svg'

function Header() {
    return (
        <nav className="nav">
            <Link to="/">
                <img src={Logo} className="nav__img" alt="" />
            </Link>
            <div>
                <Link to="/" className="nav__link">
                    Accueil
                </Link>
                <Link to="Apropos" className="nav__link">
                    À Propos
                </Link>
            </div>
        </nav>
    )
}
export default Header
