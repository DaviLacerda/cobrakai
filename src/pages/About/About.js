import Header from "../../components/Header/Header";
import poster from '../../assets/poster.jpeg'

import { AboutContainer } from './styles'

function About() {
    return (
        <>
            <Header></Header>
            <AboutContainer>
                <div className="left">
                    <h1>Cobra Kai</h1>
                    <h2>The Youtube Originals series that turned into one of the most popular series on Netflix!</h2>
                    <p>Written as a sequel of "The Karate Kid" film, Cobra Kai get hearts all of the world with kids and adults in love with the martial art Karate. </p>
                    <p>Bringing back the conflict between Daniel Larusso and Johnny Lawrence, the series is able to bring new viewers to the series and those who have seen the film in the past. With a soundtrack beyond nostalgic, Cobra Kai will release its new season (4) on December 30, 2021.</p>
                </div>
                <div className="right">
                    <img src={poster}></img>
                </div>
            </AboutContainer>
        </>
    )
}

export default About;