import Banner from '../../Components/Banner'
import BannerHome from '../../Assets/BannerHome.png'
import { data } from '../../Data/Data'
import Thumb from '../../Components/Thumb'
import './Home.scss'

function Home() {
    const slogan = 'Chez vous, partout et ailleurs'

    return (
        <div className="home">
            <div className="home__banner">
                <Banner image={BannerHome} text={slogan} />
            </div>

            <div className="home__wrapper">
                {data.map((data) => (
                    <Thumb
                        title={data.title}
                        cover={data.cover}
                        key={data.id}
                        id={data.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
