import "./Section1.scss"

function Section1() {
  return (
    <section className="section1">
        <div className="section1-container1">
            <div className="section1-textbox">
                <p className="section1-textbox__text">Custom icon pack</p>
                <h1 className="section1-textbox__title">A wildly over the top, neon themed icon pack for your device customisation.</h1>
            </div>
            <button className="section1-container1__btn">Buy now - $14.99</button>
        </div>
        <div className="section1-container2">
            <div className="section1-box">
                <p className="section1-box__text1">3D rendered icons</p>
                <p className="section1-box__text2">Not a flat vector graphic in sight – this pack has been meticulously crafted in shiny 3D beauty.</p>
            </div>
            <div className="section1-box">
                <p className="section1-box__text1">High definition</p>
                <p className="section1-box__text2">Each icon has been rendered at 2048px, ludicrously large for an icon but it's just nice to see the details sometimes.</p>
            </div>
            <div className="section1-box">
                <p className="section1-box__text1">Over 100 icons included</p>
                <p className="section1-box__text2">Included in this pack are over 100 icons of the most commonly used apps and utilities.</p>
            </div>
        </div>
    </section>
  )
}

export default Section1