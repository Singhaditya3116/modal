import "./GSTInformation.scss";
import cross from "../images/cross.svg";
import info from "../images/info.svg";
import like from "../images/like.svg";
import bgImg from "../images/bg-img.svg"

const GSTInformation = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="text">GST? No Worries!</div>
        <div className="icon">
            <img src={cross} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="info-card">
            <div className="top-wrap">
                <div className="icon-wrap">
                    <img src={info} alt="Info" />
                </div>
                <div className="text">Starting 1st October 2023, 28% GST is being charged by Government on your deposits.</div>
            </div>
            <div className="bottom-wrap">
                <div className="icon-wrap">
                    <img src={like} alt="Like" />
                </div>
                <div className="text">100% Govt. GST paid by RummyCircle</div>
            </div>
        </div>
        <div className="benefit-card">
            <div className="top-wrap">
                <div className="text">
                GST benefits earned so far 
                </div>
                <div className="price">
                    ₹1,10,000
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
                        <div className="price text-danger">
                        ₹780
                        </div>
                        <p className="text">Goes to your wallet</p>
                    </div>
                    <div className="card">
                        <div className="price text-success">
                        ₹220
                        </div>
                        <p className="text">Govt. GST on your deposit</p>
                    </div>
                </div>

                <div className="outcome-wrapper">
                    <div className="left-wrap">
                        <div className="price text-success">₹220</div>
                        <div className="desc-wrap">
                            <div className="icon-wrap">
                                <img src={like} alt="" />
                            </div>
                            <div className="text">GST paid by <span className="highlight">RummyCircle</span></div>
                        </div>
                            <div className="text">on your behalf</div>
                        <img className="glitter" src={bgImg} alt="" />
                    </div>
                    <div className="right-wrap">
                        <div className="text">You Get</div>
                        <div className="price text-success">₹1000</div>
                        <div className="o-text">in your wallet</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GSTInformation;
