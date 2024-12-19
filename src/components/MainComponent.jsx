import GSTInformation from "./GST/GSTInformation";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import "./MainComponent.scss";


const MainComponent = () => {

    const GSTData =  {
        "gstHeadline": "Starting 1st October 2023, 28% GST is being charged by Government on your deposits.",
        "gstDescription": "100% Govt. GST paid by RummyCircle",
        "totalBenefitsEarned":"1,10,000",
    }
                
            
    const [showModal, setShowModal] = useState(true);

    const toggleModal = () => {
        setShowModal((prevState) => !prevState);
    }

    useEffect(() => {
        if(showModal){
            document.body.classList.add("show-modal");
            document.body.style.overflow = "hidden";
        }else{
            document.body.classList.remove("show-modal");
            document.body.style.overflow = "auto";

        }
    },[showModal])

    return (
        <>
            {/* <GSTInformation/> */}
            <Modal onClose = {toggleModal} modalTitle="GST? No Worries!">
                <GSTInformation data={GSTData}/>
            </Modal>

            <button className="gst-btn" onClick={toggleModal}>Show GST Information</button>
        </>

    )
}

export default MainComponent;