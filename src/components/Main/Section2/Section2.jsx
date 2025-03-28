import "./Section2.scss"
import phone from "../../../assets/Homepage/png/phone.png"
function Section2() {
  return (
    <section className="section2">
        <div className="section2-container">
            <div className="section2-textbox">
                <h2 className="section2-textbox__title">100+ Unique icons</h2>
                <p className="section2-textbox__text">Over 100 of the most commonly use app icons <br/> Optimised for iOS with solid black backgrounds  Transparent PNG versions to do what you like with <br/> Mac OS optimised versions <br/> Access to any future additions or updates <br/> Installation instructions included</p>
            </div>
            <button className="section2-container__btn">Buy now - $14.99</button>
        </div>
        <img src={phone} alt="phone" className="section2__img" />
    </section>
  )
}

export default Section2