import { useSelector } from 'react-redux';
import { PAGES_NAMES } from "../../constants/index";
import NavItem from './HeaderNavItem';

function Header() {
    const { weather } = useSelector(state => state.reducer.weather);
    
    return (
        <div className="p-3 bg-gray-400 bg-opacity-40 flex_component mb-8">
            <div className="flex_component">
                <img className="svg w-20 h-20 mr-3" src="/images/logo.png" alt="Weather in Logo"/>
                {/* <a href="https://www.flaticon.com/free-icons/weather-forecast" title="weather forecast icons">Weather forecast icons created by Good Ware - Flaticon</a> */}
                <p className="text-5xl font-medium">Weather in {weather.name}</p>
            </div>
            <nav>
                <ul className="flex justify-between items-center">
                    {PAGES_NAMES.map((name, i) => (
                        <NavItem key={i} name={name}/>
                    ))}
                </ul>
            </nav> 
        </div>
    )
}

export default Header;