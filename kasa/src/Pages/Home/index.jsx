import Banner from '../../Components/Banner'
import BannerHome from '../../Assets/BannerHome.png'

import Thumb from '../../Components/Thumb'
import { useAllHousing } from '../../Api'
import Loader from '../../Components/Loader'
import './Home.scss'

function Home() {
    const { data, isLoading, error } = useAllHousing(
        `https://github.com/mayccos/BeckerJean-Christophe_11_20022022/blob/main/kasa/src/_mocks_/Data.json`
    )

    const { housing } = data
    const slogan = 'Chez vous, partout et ailleurs'
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    return (
        <div className="home">
            <div className="home__banner">
                <Banner image={BannerHome} text={slogan} />
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="home__wrapper">
                    {housing.map((data) => (
                        <Thumb
                            title={data.title}
                            cover={data.cover}
                            key={data.id}
                            id={data.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
