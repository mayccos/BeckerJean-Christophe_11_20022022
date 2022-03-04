import './Rating.scss'

function Rating({ rating }) {
    const rates = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {/* Loop to display star by rating */}
            {rates.map((ratesElem) =>
                rating >= ratesElem ? (
                    <img
                        key={ratesElem.toString()}
                        className="rating__icon"
                        src="/star.svg"
                        alt=""
                    />
                ) : (
                    <img
                        key={ratesElem.toString()}
                        className="rating__icon"
                        src="/greyStar.svg"
                        alt=""
                    />
                )
            )}
        </div>
    )
}

export default Rating
