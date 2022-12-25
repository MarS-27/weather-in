import { useSelector } from 'react-redux';


function ForWeek() {
    const { loading, weatherForWeek, error } = useSelector(state => state.reducer.weather);
    
    console.log(weatherForWeek);

    return (
        <div>For week</div>
    )
}

export default ForWeek;