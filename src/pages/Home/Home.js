import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import mainImage from '../../assets/main-image.png'
import { Container } from "./styles";

function Home() {
    return (
        <>
            <Header></Header>
            <Container>
                <div className="main__content">
                    <h2>Strikes First</h2>
                    <h2>Strikes Hard</h2>
                    <h2>No Mercy</h2>
                </div>
                <div className="main__image">
                    <img src={mainImage}></img>
                </div>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default Home;