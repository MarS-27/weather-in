function getWeatherDate(epoch) {
    const epochConvert = new Date(epoch * 1000);
    const date = epochConvert.toUTCString().slice(0, 16);
    return date;
};

export default getWeatherDate;
