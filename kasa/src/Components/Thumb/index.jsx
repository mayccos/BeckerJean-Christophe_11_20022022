import './Thumb.scss'
import { Link } from 'react-router-dom'
function Thumb({ id, cover, title }) {
    return (
        <div className="thumb" key={id}>
            <Link to={`housing/${id}`}>
                <img src={cover} alt={title} className="thumb_img" />
                <div className="thumb__overlay"></div>
                <h2 className="thumb__title">{title}</h2>
            </Link>
        </div>
    )
}

export default Thumb
