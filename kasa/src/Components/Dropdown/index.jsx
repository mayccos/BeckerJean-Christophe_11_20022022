import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import './Dropdown.scss'

function Dropdown({ title, textContent }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="dropdown">
            <div className="dropdown__top">
                <h4 className="dropdown__title">{title}</h4>
                <FaChevronUp
                    className="dropdown__icon"
                    id="chevron__up"
                    onClick={() => setIsOpen(false)}
                />
            </div>
            <p className="dropdown__content">{textContent}</p>
        </div>
    ) : (
        <div className="dropdown">
            <div className="dropdown__top">
                <h4 className="dropdown__title">{title}</h4>
                <FaChevronDown
                    className="dropdown__icon"
                    id="chevron__down"
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <p style={{ display: 'none' }}>{textContent}</p>
        </div>
    )
}
export default Dropdown
