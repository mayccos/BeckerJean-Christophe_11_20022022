import './Carrousel.scss'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carrousel = ({ pictures }) => {
    const [current, setCurrent] = useState(0)
    const picturesLength = pictures.length

    // To go to the next picture
    const goNext = () => {
        setCurrent(current === picturesLength - 1 ? 0 : current + 1)
    }
    // To go to the previous picture
    const goPrevious = () => {
        setCurrent(current === 0 ? picturesLength - 1 : current - 1)
    }

    return (
        <div className="carrousel">
            {pictures.map((picture, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === current
                                ? 'slide carrousel__active-picture'
                                : 'slide carrousel__inactive-picture'
                        }
                    >
                        {index === current && (
                            <img
                                src={picture}
                                alt=""
                                className="carrousel__picture"
                            />
                        )}
                    </div>
                )
            })}
            {/* To display the button if there are more thant one picture */}
            {picturesLength > 1 ? (
                <>
                    <div className="carrousel__previous" onClick={goPrevious}>
                        <FaChevronLeft className="carrousel__previous-icon" />
                    </div>
                    <div className="carrousel__next" onClick={goNext}>
                        <FaChevronRight className="carrousel__next-icon" />
                    </div>
                </>
            ) : null}
            <div className="carrousel__counter">
                {current + 1}/{picturesLength}
            </div>
        </div>
    )
}

export default Carrousel
