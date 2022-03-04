import './Host.scss'

function Host({ host }) {
    const splitName = host.name.split(' ')
    const [name, lastname] = splitName

    return (
        <div className="host">
            <div className="host__name">
                <p className="host__firstName">{name}</p>
                <p className="host__lastName">{lastname}</p>
            </div>

            <img src={host.picture} alt="" className="host__picture" />
        </div>
    )
}
export default Host
