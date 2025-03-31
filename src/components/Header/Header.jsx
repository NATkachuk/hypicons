import "./Header.scss"
import Logo from "../../assets/Homepage/svg/Logo.svg"
import { Link } from "react-router-dom"
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
        <div className="header-btns">
            <button className="header__btn"><Link className="header__btn-link" to="/SignUp">Sign up</Link></button>
            <button className="header__btn"><Link className="header__btn-link" to="/SignIn">Sign in</Link></button>
        </div>
    </header>
  )
}

export default Header