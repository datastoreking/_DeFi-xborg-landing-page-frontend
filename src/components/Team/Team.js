import React from 'react'
import Member1 from '../../assets/profile-1.png'
import Member2 from '../../assets/profile-2.png'
import Member3 from '../../assets/profile-3.png'
import Twitter from '../../assets/Twitter.png'
import linkedin from '../../assets/linkedin.png'
import partner1 from '../../assets/partner-5.png'
import partner2 from '../../assets/partner-1.png'
// import partner3 from '../../assets/partner-2.png'
// import partner4 from '../../assets/partner-4.png'
// import partner5 from '../../assets/partner-3.png'
import './team.css'
const Team = () => {
  return (
    <section className="team" id="team">
        <div className="team-container">
            <div className="sec-title">
                <div className="sec-heading" data-aos="fade-left">
                    <h1>Core Team</h1>
                    <span></span>
                </div>  
            </div>
            <div className="team-wrapper"  data-aos="fade-up">
                <div className="member">
                    <div className="member-img">
                        {/* <img src={Member1} alt="Member" /> */}
                        <img src={Member1} alt="member" />
                            <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h3>Addy Singh</h3>
                    <span>Co-Founder and CTO</span>
                    <a href="https://twitter.com/cryptonite_lad" className='s-link' target='_blank' rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a>
                </div>
                <div className="member">
                    <div className="member-img">
                        <img src={Member2} alt="Member" />
                         <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h3>Ash Harris</h3>
                    <span>Co-Founder and CEO</span>
                    <a href="https://www.linkedin.com/in/ash-harris-25911426/" className='s-link' target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="Twitter" /></a>
                </div>
                <div className="member">
                    <div className="member-img">
                        <img src={Member3} alt="Member" className='img-round' />
                        <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h3>Netina Beukes</h3>
                    <span>Creative Director</span>
                    <a href="https://twitter.com/rat_around" className='s-link' tabIndex='_blank' rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a>
                </div>
            </div>
            <h1 className='partner-h'>Partners</h1>
            <div className="partner-container">
                <div className="member">
                    <div className="member-img">
                        {/* <img src={Member1} alt="Member" /> */}
                        <img src={partner1} alt="member" />
                            <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h2>Rogue Shift</h2>
                </div>
                <div className="member">
                    <div className="member-img">
                        {/* <img src={Member1} alt="Member" /> */}
                        <img src={partner2} alt="member" />
                            <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h2>Metatpopit</h2>
                </div>
                {/* <div className="partner" data-aos="zoom-in">
                    <div className="partner-img">
                        <img src={partner2} alt="partner" />
                        <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h2>Metatpopit</h2>
                </div> */}
                {/* <div className="partner" data-aos="zoom-in">
                    <div className="partner-img">
                        <img src={partner3} alt="partner" />
                        <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h2>Shivam Jain</h2>
                    <span>Creative Director</span>
                </div>
                <div className="partner" data-aos="zoom-in">
                    <div className="partner-img">
                        <img src={partner4} alt="partner" />
                        <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h2>Chris Anderson</h2>
                    <span>Creative Director</span>
                </div>
                <div className="partner" data-aos="zoom-in">
                    <div className="partner-img">
                        <img src={partner5} alt="partner" />
                        <svg>
                            <path
                                    d="M 87 1 A 86 86 0 1 1 86.9 1"
                                    stroke="#D144F9"
                                    strokeWidth="3"
                                    fill="none"/>
                            </svg>
                    </div>
                    <h2>Gel Gabalu</h2>
                    <span>Creative Director</span>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Team