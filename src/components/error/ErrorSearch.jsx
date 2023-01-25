import errorImg from "../../images/error.svg";

function ErrorSearch({ error }) {
   
    return (
        <div>
            <img className="w-10 h-10 mx-auto" src={errorImg} alt="error"/>
            <p
                className="
                    font-regular 
                    text-xl
                    py-2
                    mb-1
                    w-full
                    text-center 
                " 
            >Oops, {error}!</p>
        </div>
    );
    
}

export default ErrorSearch;