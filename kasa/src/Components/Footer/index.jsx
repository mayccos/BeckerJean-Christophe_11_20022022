import './Footer.scss'
import Footer_logo from '../../Assets/Footer_logo.svg'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <img
                src={Footer_logo}
                alt=""
                data-testid="footerLogo"
                className="footer__logo"
            />
            <p className="footer__text" data-testid="footerText">
                © {currentYear} Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer
