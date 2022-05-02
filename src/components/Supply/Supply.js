import React from 'react'
import SupplyImg from '../../assets/supply.png'
import DistributionImg from '../../assets/distribution.png'
import './supply.css'
const Supply = () => {
  return (
    <section className="supply" id="supply">
        <div className="container">
            <div className='supply-gird-view'>
                <div>
                    <div className="sec-title" >
                        <div className="sec-heading"  data-aos="fade-right">
                            <h1>Supply</h1>
                            <span></span>
                        </div>  
                    </div>
                    <div className="supply-img" data-aos="fade-right">
                        <img src={SupplyImg} alt="" />
                    </div>
                </div>
                <div>
                    <div className="sec-title">
                        <div className="sec-heading"  data-aos="fade-left">
                            <h1>Distribution</h1>
                            <span></span>
                        </div>  
                    </div>
                    <div className="distribution-img" data-aos="fade-left">
                        <img src={DistributionImg} alt="" />
                    </div>
                </div>
            </div>
            
            
        </div>
    </section>
  )
}

export default Supply