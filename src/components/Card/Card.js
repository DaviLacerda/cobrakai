import { CardContainer } from "./styles"

function Card(props) {
    return (
        <CardContainer>
            <div className="upper">
                <img alt={props.name} src={props.src}></img>
            </div>
            <div className="below">
                <h4>{props.name}</h4>
            </div>
        </CardContainer>
    )
}

export default Card