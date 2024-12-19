import React from 'react';
import LikeIcon from '../../icons/LikeIcon';
import InfoIcon from '../../icons/InfoIcon';


const GSTHeadline = ({headline,description}) => {
  return (
    <div className="info-card">
    <div className="top-wrap">
        <div className="icon-wrap">
            {/* <img src={info} alt="Info" /> */}
            <InfoIcon/>
        </div>
        <div className="text">{headline}</div>
    </div>
    <div className="bottom-wrap">
        <div className="icon-wrap">
            {/* <img src={like} alt="Like" /> */}
            <LikeIcon/>
        </div>
        <div className="text">{description}</div>
    </div>
</div>
  )
}

export default GSTHeadline