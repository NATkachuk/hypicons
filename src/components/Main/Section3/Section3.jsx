import "./Section3.scss"
import icons from "../../../assets/Homepage/png/icons.png"
function Section3() {
  return (
    <section className="section3">
        <h2 className="section3-title">3D rendered icons</h2>
        <img src={icons} alt="icons" className="section3-img" />
    </section>
  )
}

export default Section3