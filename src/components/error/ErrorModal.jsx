import React, { useState } from "react";
import ReloadButton from "../buttons/ReloadPageButton";
import errorImg from "../../images/error.svg";

function ErrorModal({ error }) {
    const [openModal, setOpenModal] = useState(true);

    const handleClose = () => {
        setOpenModal(false);
        window.location.reload();
    } 
    
    return (
        <>
            {openModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={handleClose}
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-3 mx-auto bg-white rounded-md shadow-lg">
                            <div className="flex-col">
                                <div className="flex_component justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                                    <img className="w-10 h-10" src={errorImg} alt="error"/>
                                </div>
                                <div className="mt-2 text-center">
                                    <h4 className="mt-3 text-2xl font-medium text-center">
                                        {error}
                                    </h4>
                                    <p className="mt-3 text-lg font-regular leading-relaxed text-center">
                                        Oops, something's wrong!
                                    </p>
                                    <div className="items-center gap-2 mt-3">
                                       <ReloadButton handleClose={handleClose}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} 
        </>
    );
    
}

export default ErrorModal;