import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom';
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';

function Header() {
    window.addEventListener('resize', () => {
        var barTop = document.getElementsByClassName('bar--top')[0]
        var barMid = document.getElementsByClassName('bar--mid')[0]
        var barBot = document.getElementsByClassName('bar--bot')[0]

        if(window.screen.width >= 600 && barTop){
            const menuToggle = document.getElementsByClassName('menu__toggle')[0]

            const header = document.querySelector('header');

            menuToggle.style.display = 'none'
            header.style.flexDirection = 'row';

            barTop.classList.remove('bar--top')
            barMid.classList.remove('bar--mid')
            barBot.classList.remove('bar--bot')
        }
    })


    return (
        <HeaderContainer>
            <h1>Cobra Kai</h1>

            <HamburguerMenu></HamburguerMenu>

            <nav className='menu'>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/characters'>
                        <li>Characters</li>
                    </Link>


                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </nav>

            <nav className='menu__toggle'>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/characters'>
                        <li>Characters</li>
                    </Link>


                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </nav>

        </HeaderContainer>
    )
}

export default Header;