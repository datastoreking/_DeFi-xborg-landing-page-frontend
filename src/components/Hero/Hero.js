import React from 'react'
import './hero.css'
import OpenseaImg from '../../assets/opensea.png'
const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className="container">
        <div className="hero-content">
          <p className='hero-title'> XBorg</p>
          <p className='hero-description'>A Powerhouse Utility NFT</p>
          <br />
          <br />
          <div className="hero-btn">
            <a className='btn-mint' href='/#'>
              The Mint
            </a>
            <div className='btn-mint'>
              <img src={OpenseaImg} className='opensea-img' alt='Opensea'/>
              Opensea
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero-overlay"></div> */}
    </section>
  )
}

export default Hero