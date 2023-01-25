import loader from "../../images/animateLoader.svg";

function Loader({ miniLoaderClasses }) {
    return (
        <div className={miniLoaderClasses ? miniLoaderClasses : "text-center w-10 h-10 mx-auto"}>
            <img className="animate-spin" src={loader} alt="loader" />
        </div>
    );
}

export default Loader;