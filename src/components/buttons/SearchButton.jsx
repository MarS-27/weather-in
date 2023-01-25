import search from "../../images/search.svg";

function SearchButton() {
    return (
        <button  
            className="
                flex
                items-center
                justify-center
                w-9
                h-9 
                min-w-[36px]
                min-h-[36px]
                ml-1
                rounded-lg 
                hover:bg-sky-300 
                focus:outline-none 
                focus:ring-2 
                focus:ring-gray-200
            " 
        >
            <img className="w-6 h-6" src={search} alt="search" />
        </button>
    );
};

export default SearchButton;