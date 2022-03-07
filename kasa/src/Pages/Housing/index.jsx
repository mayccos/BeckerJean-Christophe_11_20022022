import './Housing.scss'
import { useParams } from 'react-router-dom'
import Tags from '../../Components/Tags/'
import Host from '../../Components/Host'
import Carrousel from '../../Components/Carrousel'
import Rating from '../../Components/Rating'
import Dropdown from '../../Components/Dropdown'
import { data } from '../../Data/Data'

function Housing() {
    const urlParams = useParams()

    const housing = data.find((data) => data.id === urlParams.id)

    return (
        <div className="housing">
            <Carrousel pictures={housing.pictures} />
            <div className="housing__content">
                <div className="housing__informations">
                    <h1 className="housing__title">{housing.title}</h1>
                    <p className="housing__location">{housing.location}</p>
                    <div className="housing__tags">
                        {housing.tags.map((tag) => (
                            <Tags key={tag} tagName={tag} />
                        ))}
                    </div>
                </div>
                <div className="housing__ratingHost">
                    <Rating rating={housing.rating} />
                    <Host host={housing.host} />
                </div>
            </div>
            <div className="housing__dropdown">
                <Dropdown
                    title="description"
                    textContent={housing.description}
                />
                <Dropdown title="équipement" textContent={housing.equipments} />
            </div>
        </div>
    )
}

export default Housing
