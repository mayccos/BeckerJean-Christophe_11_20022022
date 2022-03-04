import Loader from '../../Components/Loader/index.jsx'
import Banner from '../../Components/Banner.jsx/index.jsx'
import { Link } from 'react-router-dom'
import { GetAllDataHousing } from '../../Api/index.jsx'
import Thumb from '../../Components/Thumb/index.jsx'
import './Home.scss'

function Home() {
    const { data, isLoading, error } = GetAllDataHousing(
        'http://localhost:8080/housing'
    )
    const slogan = 'Chez vous, partout et ailleurs'
    const image = '../../Assets/BannerHome.png'
    const housing = data

    if (error) {
        return <div>{error}</div>
    }
    return (
        <div className="home">
            <div className="home__banner">
                <Banner image={image} text={slogan} />
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="homeWrapper">
                    {housing.map((house) => (
                        <Link to={`/housing/${house.id}`} key={house.id}>
                            <Thumb image={house.cover} title={house.title} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
