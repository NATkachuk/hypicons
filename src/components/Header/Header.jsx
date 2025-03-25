import "./Header.scss"
import Logo from "../../assets/Homepage/svg/Logo.svg"
function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="" className="nav__link">Intro</a>
                </li>
                <li className="nav__item">
                    <a href="" className="nav__link">What’s Included?</a>
                </li>
                <li className="nav__item">
                    <a href="" className="nav__link">Icon request</a>
                </li>
            </ul>
        </nav>
        <button className="header__btn">Buy now</button>
    </header>
  )
}

export default Header