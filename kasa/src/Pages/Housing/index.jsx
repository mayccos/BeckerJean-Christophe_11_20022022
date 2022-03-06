import './Housing.scss'
import { useParams } from 'react-router-dom'
import Tags from '../../Components/Tags/'
import Host from '../../Components/Host'
import Carrousel from '../../Components/Carrousel'
import Rating from '../../Components/Rating'
import Dropdown from '../../Components/Dropdown'
//import { data } from '../../Data/Data'
import Loader from '../../Components/Loader'
import { GetDataHousingById } from '../../Api'

function Housing() {
    const { id } = useParams()
    const { data, isLoading } = GetDataHousingById(
        'https://github.com/mayccos/BeckerJean-Christophe_11_20022022/blob/main/kasa/src/__Mocks__/Data.json',
        id
    )
    const housing = data

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="housing">
                    <Carrousel pictures={housing.pictures} />
                    <div className="housing__content">
                        <div className="housing__informations">
                            <h1 className="housing__title">{housing.title}</h1>
                            <p className="housing__location">
                                {housing.location}
                            </p>
                            <div className="housing__tags">
                                {housing.tags.map((tag) => (
                                    <Tags key={tag} tagName={tag} />
                                ))}
                            </div>
                        </div>
                        <div className="housing__rating-and-host">
                            <Rating rating={housing.rating} />
                            <Host host={housing.host} />
                        </div>
                    </div>
                    <div className="housing__dropdowns">
                        <Dropdown
                            title="description"
                            content={housing.description}
                        />
                        <Dropdown
                            title="équipement"
                            content={housing.equipments}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Housing
