import GSTInformation from "./GSTInformation";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import "./hello.scss";

const MainComponent = () => {

    const [showModal, setShowModal] = useState(false);

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
            <GSTInformation/>
            <Modal showModal={showModal} onClose = {toggleModal} />

            <button className="gst-btn" onClick={toggleModal}>Show GST Information</button>
        </>

    )
}

export default MainComponent;