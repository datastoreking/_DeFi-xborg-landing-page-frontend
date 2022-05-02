import React from 'react'
import './xborg.css'
import XborgImg from '../../assets/xborg.jpeg'
const Xborg = () => {
  return (
    <section className="xborg" id="xborg">  
        <div className='container'>
            <div className="xborg-container">
                <div className="xborg-img" data-aos="fade-right">
                    <img src={XborgImg} alt="xborg " />
                </div>
                <div className="xborg-content" data-aos="fade-left">
                    <h1>What is Xborg</h1>
                    <br />
                    <p>XBorgs’ are a genesis collection of 6,000 NFTs (non-fungible tokens) on Ethereum blockchain and brand mascot of VISPX.
                    </p>
                    <br />
                    <p> Our NFTs are made up of hundreds of hand-drawn exciting visual traits that make them unique.</p>
                    <br />
                    <p>
                    The objective of the XBorg NFT is to allow users the opportunity to access our launchpad IDOs & IGOs and to unlock exclusive benefits.
                    </p>
                    <br />
                    <p>
                    Owning XBorg allows you to vote for community-driven features, new onboarding projects and events. This makes our roadmap dynamic and adaptable.
                    
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Xborg