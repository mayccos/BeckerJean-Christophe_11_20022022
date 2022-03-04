import './Tags.scss'

function Tags({ tagName }) {
    return (
        <div className="tag">
            <p className="tag__text">{tagName}</p>
        </div>
    )
}

export default Tags
