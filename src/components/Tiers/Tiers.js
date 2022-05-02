import React from 'react'
import './tiers.css'
// import Autobot from '../../assets/autobot.png'
// import Common from '../../assets/common-tier.png'
// import NFT3600 from '../../assets/nft 3600.png'
// import Maximal from '../../assets/maximal.png'
// import Decpticon from '../../assets/decpticon.png'
// import Elite from '../../assets/elite tier.png'
// import Rare from '../../assets/rare-tier.png'
// import NFT1800 from '../../assets/nft 1800.png'
// import NFT600 from '../../assets/nft 600.png'


const Tiers = () => {
  return (
    <section className="tiers" id="tiers">
        <div className="container">
             <div className="sec-title">
                <div className="sec-heading" data-aos="fade-right">
                    <h1>Genesis Mechanics</h1>
                    <span></span>
                </div>  
            </div>
            <div className="tier-container">
                <div className="tier-wrapper" data-aos="flip-up">
                    <div className="tier-head bg-head-f">
                        <div className="tier-head-img">
                            {/* <img src={Autobot} alt="autobot" /> */}
                        </div>
                        <span>Royalties</span>
                    </div>
                    <div className="tier-bdy bg-body-f ">
                        <div className="tier-inner-wrap">
                            <div className="tier-head tier-body-h">
                                <span>VISPX will receive 5% of all secondary sales. These proceeds will be used to continue ecosystem development, fund operations, and deliver even more value to our community.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tier-wrapper" data-aos="flip-up">
                    <div className="tier-head bg-head-s">
                        <div className="tier-head-img">
                            {/* <img src={Decpticon} alt="autobot" /> */}
                        </div>
                        <span>NGMI Tax</span>
                    </div>
                    <div className="tier-bdy bg-body-s">
                        <div className="tier-inner-wrap">
                            <div className="tier-head tier-body-h">
                                <span>Selling below the floor price on our future marketplace will incur 33.3% NGMI tax and the same to be used to buy back $VXP tokens from the market and burn them as deflationary mechanics.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tier-wrapper" data-aos="flip-up">
                    <div className="tier-head bg-head-t">
                        <div className="tier-head-img">
                            {/* <img src={Maximal} alt="autobot" /> */}
                        </div>
                        <span>Gas Optimization</span>
                    </div>
                    <div className="tier-bdy bg-body-t">
                        <div className="tier-inner-wrap">
                            <div className="tier-head tier-body-h">
                                <span>
                                    Our genesis collection is built on ERC721A protocol minting, designed to be scalable and gas-efficient and it provides batch minting at a fixed gas cost which drastically reduces the NFT minting gas fees up to 80% over the traditional minting.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tiers