import './Rating.scss'
import { VscStarFull } from 'react-icons/vsc'
function Rating({ rating }) {
    const rates = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {/* Loop to display star by rating */}
            {rates.map((number) =>
                rating >= number ? (
                    <VscStarFull
                        key={number.toString()}
                        className="rating__redIcon"
                    />
                ) : (
                    <VscStarFull
                        key={number.toString()}
                        className="rating__greyIcon"
                    />
                )
            )}
        </div>
    )
}

export default Rating
