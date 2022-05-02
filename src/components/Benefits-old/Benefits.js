import React from 'react'
import Title1 from '../../assets/title-1.png'
import Title2 from '../../assets/title-2.png'
import Title3 from '../../assets/title-3.png'
import Title4 from '../../assets/title-4.png'
import Title5 from '../../assets/title-5.png'
import './benefits.css'
const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
        <div className="container">
            <div className="sec-title" >
                <div className="sec-heading" data-aos="fade-right">
                    <h1>Unlocking a powerhouse of benefits</h1>
                    <span></span>
                </div>  
            </div>
            <div className="benefits-container">
                <div className="benefit-wrap" data-aos="zoom-in">
                    <div className="benefit-title">
                        <div className="title-img">
                            <img src={Title1} alt="Title one" />
                        </div>
                        <h3>Free access to ALL ICO, 100 and INOs</h3>
                    </div>
                    <div className="benefit-txt">
                        <p>
                            Our incubation program, supported by partner-networks,
                            will provide each project with end-to-end support for 
                            sustainable strategies and a successful launch.
                        </p>
                    </div>
                </div>
                <div className="benefit-wrap" data-aos="zoom-in">
                    <div className="benefit-title">
                        <div className="title-img">
                            <img src={Title2} alt="Title one" />
                        </div>
                        <h3>Stake to Earn $VXP</h3>
                    </div>
                    <div className="benefit-txt">
                        <p>
                            Our incubation program, supported by partner-networks,
                            will provide each project with end-to-end support for 
                            sustainable strategies and a successful launch.
                        </p>
                    </div>
                </div>
                <div className="benefit-wrap" data-aos="zoom-in">
                    <div className="benefit-title">
                        <div className="title-img">
                            <img src={Title3} alt="Title one" />
                        </div>
                        <h3>Yield Box generator</h3>
                    </div>
                    <div className="benefit-txt">
                        <p>
                            Our incubation program, supported by partner-networks,
                            will provide each project with end-to-end support for 
                            sustainable strategies and a successful launch.
                        </p>
                    </div>
                </div>
                <div className="benefit-wrap" data-aos="zoom-in">
                    <div className="benefit-title">
                        <div className="title-img">
                            <img src={Title4} alt="Title one" />
                        </div>
                        <h3>Exclusive DAO Access</h3>
                    </div>
                    <div className="benefit-txt">
                        <p>
                            Our incubation program, supported by partner-networks,
                            will provide each project with end-to-end support for 
                            sustainable strategies and a successful launch.
                        </p>
                    </div>
                </div>
                <div className="benefit-wrap" data-aos="zoom-in">
                    <div className="benefit-title">
                        <div className="title-img">
                            <img src={Title5} alt="Title one" />
                        </div>
                        <h3>Early Access</h3>
                    </div>
                    <div className="benefit-txt">
                        <p>
                            Our incubation program, supported by partner-networks,
                            will provide each project with end-to-end support for 
                            sustainable strategies and a successful launch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits