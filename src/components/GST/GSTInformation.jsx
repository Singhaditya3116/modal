import "./GSTInformation.scss";


import GSTHeadline from "./GSTHeadline";
import GSTBenefit from "./GSTBenefit";

const GSTInformation = ({data}) => {
    const {gstHeadline,gstDescription,totalBenefitsEarned} = data;
  return (

      <div className="content">
        <GSTHeadline headline={gstHeadline} description={gstDescription}/>
        <GSTBenefit totalBenfit={totalBenefitsEarned}/>
      </div>

  );
};

export default GSTInformation;
