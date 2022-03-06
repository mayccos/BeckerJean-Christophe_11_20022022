import './Apropos.scss'
import Banner from '../../Components/Banner'
import BannerAbout from '../../Assets/BannerAbout.png'
import Dropdown from '../../Components/Dropdown'

const comments = [
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
]

function About() {
    return (
        <div className="about">
            <Banner image={BannerAbout} />
            <div className="about__content">
                <Dropdown title="Fiabilité" textContent={comments[0]} />
                <Dropdown title="Respect" textContent={comments[1]} />
                <Dropdown title="Service" textContent={comments[2]} />
                <Dropdown title="Responsabilité" textContent={comments[3]} />
            </div>
        </div>
    )
}
export default About
