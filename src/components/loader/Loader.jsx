function Loader({ miniLoaderClasses }) {
    return (
        <div className={miniLoaderClasses ? miniLoaderClasses : "text-center w-10 h-10"}>
            <img className="animate-spin" src="/images/animateLoader.svg" alt="loader" />
        </div>
    );
}

export default Loader;