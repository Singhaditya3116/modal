import React from 'react';
import bgImg from "../../icons/bg-img.svg";
import ArrowIcon1 from '../../icons/ArrowIcon1';
import ArrowIcon2 from '../../icons/ArrowIcon2';
import LikeIcon from '../../icons/LikeIcon';

const GSTBenefit = ({totalBenfit}) => {
  return (
    <div className="benefit-card">
    <div className="top-wrap">
        <div className="text">
        GST benefits earned so far 
        </div>
        <div className="price text-success">
            ₹{totalBenfit}
        </div>
    </div>

    <div className="bottom-wrap">
        <div className="title"> How GST on deposit works?</div>
        <div className="info-wrap">
            <div className="text">You Pay</div>
            <div className="price">₹1000</div>
            <div className="o-text">Inclusive of Govt. GST</div>
        </div>

        <div className="cards-wrapper">
            <div className="card">
                <div className="price text-success">
                ₹780
                </div>
                <p className="text">Goes to your wallet</p>
            </div>
            <div className="card">
                <div className="price text-danger">
                ₹220
                </div>
                <p className="text">Govt. GST on your deposit</p>
            </div>
            <div className="arrow-divider">
                <div className="arrow-1">

                    <ArrowIcon1/>
                </div>
                <div className="arrow-2">
                <ArrowIcon2/>

                </div>
            </div>
        </div>

        <div className="outcome-wrapper">
            <div className="left-wrap">
                <div className="price text-success">₹220</div>
                <div className="desc-wrap">
                    <div className="icon-wrap">
                        <LikeIcon/>
                    </div>
                    <div className="text">GST paid by <span className="highlight">RummyCircle</span></div>
                </div>
                    <div className="text">on your behalf</div>
                <img className="glitter" src={bgImg} alt="" />
                <div className="border-wrap"></div>
            </div>
            <div className="right-wrap">
                <div className="text">You Get</div>
                <div className="price text-success">₹1000</div>
                <div className="o-text">in your wallet</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default GSTBenefit