import "./Section5.scss"
import dot from "../../../assets/Homepage/png/dot.png"
function Section5() {
  return (
    <section className="section5">
        <div className="section5-container">
            <img src={dot} alt="" className="section5-container__img" />
            <div className="section5-container__box">
                <h2 className="section5-container__box-title">Icon request</h2>
                <p className="section5-container__box-text">If you find that the pack is missing any icons, feel free to send me a message and I will do my best to create one. Purchasing the pack will give you access to any future updates.</p>
                <button className="section5-container__box-btn">Get in touch</button>
            </div>
        </div>
    </section>
  )
}

export default Section5