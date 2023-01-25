import burger from "../../images/burger.svg";
import close from "../../images/close.svg";

function BurgerButton({ openMenu, handleOpenMenu }) {
    return (
        <button 
            type="button" 
            className="
                hidden 
                max-sm:flex
                items-center
                justify-center
                w-9
                h-9 
                min-w-[36px]
                min-h-[36px]
                rounded-lg 
                hover:bg-sky-300 
                focus:outline-none 
                focus:ring-2 
                focus:ring-gray-200
            " 
            onClick={handleOpenMenu}
        >
            {!openMenu ? (
                <img className="w-6 h-6" src={burger} alt="burger" />
            ) : (
                <img className="w-6 h-6" src={close} alt="close" />
            )}
        </button>
    );
}

export default BurgerButton;