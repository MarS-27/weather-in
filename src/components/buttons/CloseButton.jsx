import close from "../../images/close.svg";

function CloseButton({ handleClose }) {
    return (
        <button 
            type="button" 
            className="
                absolute
                -top-4
                -right-4
                flex
                items-center
                justify-center
                bg-gray-200
                min-w-[22px]
                min-h-[22px]
                rounded-[50%] 
                hover:bg-sky-300 
                focus:outline-none 
                focus:ring-2 
                focus:ring-gray-200
            " 
            onClick={handleClose}
        >
            <img 
                className="w-4 h-4" 
                src={close} 
                alt="close" 
            />
        </button>
    );
}

export default CloseButton;