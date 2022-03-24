import './Header.scss'

import Logo from '../../Assets/logo.svg'

function Header() {
    return (
        <nav className="nav" data-testid="headerNav">
            <a href="/">
                <img
                    src={Logo}
                    className="nav__img"
                    alt=""
                    data-testid="logo"
                />
            </a>

            <div data-testid="headerMenu">
                <a href="/" className="nav__link">
                    Accueil
                </a>

                <a href="/apropos" className="nav__link">
                    À Propos
                </a>
            </div>
        </nav>
    )
}
export default Header
