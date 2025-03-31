import "./Footer.scss"
import Logo from "../../assets/Homepage/svg/Logo.svg"
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <img src={Logo} alt="logo" className="footer-container__logo" />
            <p className="footer-container__text">Created by<span className="footer-container__text--bold"> @rathniley</span></p>
            <p className="footer-container__text2">Copyright © 2020. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer