import { FooterSC } from "./styles";
import Gmail from '../../assets/icons/gmail.png';
import LinkedIn from '../../assets/icons/linkedin.png';
import WhatsApp from '../../assets/icons/whatsapp.png';
import GitHub from '../../assets/icons/github.png'

function Footer() {
    return (
        <FooterSC>
            <h3>Developed by Davi Lacerda</h3>
            <h4>All rights reserved to <a href="https://www.netflix.com/br/" target='_blank'>Netflix</a></h4>
            <div className="icons">
                <a href="https://github.com/DaviLacerda" target='_blank'>
                    <img src={GitHub} width={24}></img>
                </a>
                <a href="https://www.linkedin.com/in/davi16lacerda/" target='_blank'>
                    <img src={LinkedIn} width={24}></img>
                </a>
                <a href="mailto:davi16lacerda@gmail.com?subject=Digite%20o%20assunto%20aqui" target='_blank'>
                    <img src={Gmail} width={24}></img>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5534992750234&text=Ol%C3%A1%20Davi%2C%20tudo%20bem%3F" target='_blank'>
                    <img src={WhatsApp} width={24}></img>
                </a>
            </div>
        </FooterSC>
    )
}

export default Footer;