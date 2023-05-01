import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
    return <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Tonx succulents farm-to-table church-key intelligentsia beard blue bottle artisan shaman umami meditation biodiesel synth. Keytar irony health goth, raclette schlitz everyday carry pickled cold-pressed salvia cray chartreuse umami put a bird on it. Gochujang farm-to-table direct trade banh mi street art waistcoat semiotics mumblecore poke disrupt heirloom bicycle rights.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img' />
            </div>
        </div>
    </section>
}

export default Hero