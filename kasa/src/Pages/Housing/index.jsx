import './Housing.scss'
import { useParams } from 'react-router-dom'
import { GetDataHousingById } from '../../service/api'
import Loader from '../../components/Loader'

function Housing() {
    const { id } = useParams()
    const { /*data, */ isLoading } = GetDataHousingById(
        '../../__Mocks__/Data.json',
        id
    )
    //const housing = data

    return <div>{isLoading ? <Loader /> : <div className="housing"></div>}</div>
}
export default Housing
