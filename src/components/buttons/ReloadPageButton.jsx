
function ReloadButton({ handleClose }) {

    return (
        <button
            className="
                w-full 
                mt-3 
                p-2.5 
                flex-1 
                rounded-md 
                outline-none 
                border 
                ring-offset-2 
                ring-indigo-600 
                focus:ring-2
            "
            onClick={handleClose}
        >
            Reload page
        </button>
    );
};

export default ReloadButton;