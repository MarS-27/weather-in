import getWeatherDate from "../../services/getDate";

function CurrentDate({ date }) {
    return (
        <p className=" w-1/3 pl-3 py-3 font-medium self-start text-5xl text-center">{getWeatherDate(date)}</p>
    );
}

export default CurrentDate;