import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PAGES_NAMES } from "../../constants/index";
import BurgerButton from '../buttons/BurgerButton';
import NavItem from './HeaderNavItem';

function Header() {
    const { weather } = useSelector(state => state.reducer.weather);
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => !openMenu ? setOpenMenu(true) : setOpenMenu(false); 

    const handleCloseMenu = () => setOpenMenu(false);
    
    return (
        <header className="relative p-3 bg-gray-400 bg-opacity-40 max-md:mb-5">
            <div className="flex_component max-w-7xl mx-auto">
                <div className="flex_component">
                    <a 
                        className="min-w-[80px] min-h-[80px]"
                        href="https://www.flaticon.com/free-icons/weather-forecast" 
                        title="weather forecast icons"
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img className="w-20 h-20" src="/images/logo.png" alt="Weather in Logo"/>   
                    </a> 
                    <p className="text-5xl font-medium max-md:text-3xl max-[340px]:hidden">Weather in {weather.name}</p>
                </div>
                <BurgerButton 
                    openMenu={openMenu}
                    handleOpenMenu={handleOpenMenu}
                />
                <nav className=
                    {!openMenu ? "max-sm:hidden" : "block max-sm:absolute max-sm:left-0 max-sm:top-full max-sm:w-full max-sm:px-3 animation z-10"}> 
                    <ul className="
                        flex_component 
                        max-sm:flex-col 
                        max-sm:bg-gray-200 
                        max-sm:px-3 
                        rounded-b-lg"
                    >
                        {PAGES_NAMES.map((name, i) => (
                            <NavItem 
                                key={i} 
                                name={name} 
                                handleCloseMenu ={handleCloseMenu} 
                            />
                        ))}
                    </ul>
                </nav> 
            </div>
        </header>
    )
}

export default Header;