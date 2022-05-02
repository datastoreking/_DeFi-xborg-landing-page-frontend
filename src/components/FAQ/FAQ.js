import React, { useState } from 'react'
import Arrow from '../../assets/arrow.png'
import './faq.css'
const FAQ = () => {
    const [isActive1, setIsActive1] = useState(false);
	const [isActive2, setIsActive2] = useState(false);
	const [isActive3, setIsActive3] = useState(false);
	const [isActive4, setIsActive4] = useState(false);
	const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);
    const [isActive11, setIsActive11] = useState(false);
    const [isActive12, setIsActive12] = useState(false);
    const [isActive13, setIsActive13] = useState(false);
    const [isActive14, setIsActive14] = useState(false);
  return (
    <section className="faqs" id="faqs">
        <div className="container">
            <div className="sec-title">
                <div className="sec-heading" data-aos="fade-left">
                    <h1>FAQ</h1>
                    <span></span>
                </div>  
            </div>
            <div className="question-container" data-aos="fade-up">
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive1(!isActive1)}>
                            <p>Where can I purchase XBorg NFTs?</p>
                            <img className={isActive1 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive1 ? "question-panel question-active" : "question-panel"
                            }
                        ><div>
                            <p>
                                You will be able to mint directly from our website.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive2(!isActive2)}>
                            <p>How many NFTs will be available, when is the mint date and what is the price?</p>
                           <img className={isActive2 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive2 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                           <p>XBorg genesis is a collection of 6000 NFTs. Minting will be held in May’2022 and the price is TBA.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive3(!isActive3)}>
                            <p>How are XBorg NFTs created?</p>
                           <img className={isActive3 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive3 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>
                                They are hand drawn by our artist Netina Beukes and the artwork will be minted on Ethereum blockchain.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive4(!isActive4)}>
                            <p>Which wallets are compatible for minting our NFTs?</p>
                           <img className={isActive4 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive4
                                    ? "question-panel question-active-lg"
                                    : "question-panel"
                            }
                        >
                            <div>
                            <p>We offer several ERC-20 wallets, but the most recommended is metamask.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive5(!isActive5)}>
                            <p>What are the benefits of holding XBorg NFTs?</p>
                           <img className={isActive5 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive5 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>Access to IDOs/IGOs, Yield box token earnings, Dao access, Gaming project perks etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive6(!isActive6)}>
                            <p>What is an IDO/IGO?</p>
                           <img className={isActive6 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive6 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>Initial Decentralized Offering (IDO) and Initial Game Offering (IGO) are crypto fundraising models for the projects launched on VISPX’s XPAD.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive7(!isActive7)}>
                            <p>What is a Yield Box?</p>
                           <img className={isActive7 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive7 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>A Yield Box is a simple token generator, it acts as a staking pool to offer passive income to the holders in $VXP tokens and partner project tokens for XBorg holders.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive8(!isActive8)}>
                            <p>What is DAO access and how does it benefit XBorg holders?</p>
                           <img className={isActive8 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive8 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>Here holders can exercise their voting rights for various activities including vetting processes for incubated projects, community events, ecosystem economy etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive9(!isActive9)}>
                            <p>Will the IDO/IGO staking and yield box staking lead to a decrease in the number of holders?</p>
                           <img className={isActive9 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive9 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>No, both staking functions simply update your “staked token attribute”. In other words, it is non-custodial (no need to transfer it to another contract) and the holder numbers displayed on OpenSea or any secondary market will not be impacted.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive10(!isActive10)}>
                            <p>Are there other benefits to staking my XBorg NFTs?</p>
                           <img className={isActive10 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive10 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>When an XBorg is staked, it cannot be stolen using some of the more common phishing techniques we have seen recently, all of which rely on the standard ERC721 transfer functions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive11(!isActive11)}>
                            <p>Can I sell or list my XBorg after it’s staked?</p>
                           <img className={isActive11 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive11 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>A staked XBorg cannot be transferred by the usual functions. This means that while technically you can list your NFT, an attempt to purchase via OpenSea or any secondary marketplace would fail (and MetaMask would warn the purchaser before they attempt and spend gas fees).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive12(!isActive12)}>
                            <p>What are secondary royalties and how will they be used?</p>
                           <img className={isActive12 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive12 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>VISPX will receive 5% of all secondary sales. These proceeds will be used to continue ecosystem development, fund operations, and deliver even more value to our community.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive13(!isActive13)}>
                            <p>Is there a future roadmap after the current displayed one on the website?</p>
                           <img className={isActive13 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive13 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>As we will expand our VISPX ecosystem we will keep adding new milestones for our genesis collection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive14(!isActive14)}>
                            <p>Will XBorgs be revealed right away?</p>
                           <img className={isActive14 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive14 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>Yes, you will immediately know what your new XBorg friend looks like!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ