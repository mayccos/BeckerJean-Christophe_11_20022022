import './Error.scss'
import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
    return (
        <div className="error">
            <div className="error__content">
                <p className="error__number">404</p>
                <p className="error__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="error__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error
