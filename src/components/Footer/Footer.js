import { FooterSC } from "./styles";

function Footer() {
    return (
        <FooterSC>
            <h3>Developed by Davi Lacerda</h3>
            <h4>All rights reserved to <a href="https://www.netflix.com/br/" target='_blank'>Netflix</a></h4>
            <div className="icons">
                <a href="https://github.com/DaviLacerda" target='_blank'>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" width={24}></img>
                </a>
                <a href="https://www.linkedin.com/in/davi16lacerda/" target='_blank'>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/linkedin/linkedin-original.svg" width={24}></img>
                </a>
                <a href="mailto:davi16lacerda@gmail.com?subject=Digite%20o%20assunto%20aqui" target='_blank'>
                    <img src="https://cdn-icons.flaticon.com/png/512/2875/premium/2875435.png?token=exp=1640714770~hmac=feb768d2b630d4b60cc2acb6ec8908ce" width={24}></img>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5534992750234&text=Ol%C3%A1%20Davi%2C%20tudo%20bem%3F" target='_blank'>
                    <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" width={24}></img>
                </a>
            </div>
        </FooterSC>
    )
}

export default Footer;