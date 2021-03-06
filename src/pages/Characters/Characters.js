import { CardContainer} from "./styles"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"

//import images
import DanielLarusso from '../../assets/characters/daniel_larusso.jpg'
import JohnnyLawrence from '../../assets/characters/johnny_lawrence.jpg'
import JohnKreese from '../../assets/characters/john_kreese.jpg'
import MiguelDiaz from '../../assets/characters/miguel_diaz.png'
import SamanthaLarusso from '../../assets/characters/samantha_larusso.jpg'
import RobbyKeene from '../../assets/characters/robby_keene.jpg'
import ToryNichols from '../../assets/characters/tory_nichols.jpg'
import Hawk from '../../assets/characters/hawk.jpg'

function Characters() {
    return (
        <>
            <Header></Header>
            <CardContainer>
                <h1>Main Characters:</h1>
                <div className="cardShow">
                    <Card name='Johnny Lawrence' src={JohnnyLawrence}></Card>
                    <Card name='Daniel Larusso' src={DanielLarusso}></Card>
                    <Card name='Miguel Diaz' src={MiguelDiaz}></Card>
                    <Card name='Robby Keene' src={RobbyKeene}></Card>
                    <Card name='Tory Nichols' src={ToryNichols}></Card>
                    <Card name='Samantha Larusso' src={SamanthaLarusso}></Card>
                    <Card name={`Eli 'Hawk' Moskowitz`} src={Hawk}></Card>
                    <Card name='John Kreese' src={JohnKreese}></Card>
                </div>
            </CardContainer>
        </>
    )
}

export default Characters