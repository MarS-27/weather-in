import { NavLink } from "react-router-dom";

function NavItem({ name, handleCloseMenu  }) {
    return (
        <li 
            className="
                font-regular 
                text-xl 
                mr-1
                last-of-type:mr-0
                max-sm:mr-0
                max-sm:mt-3
                max-sm:w-full 
                last-of-type:max-sm:mb-3
            "
            onClick={handleCloseMenu}
        >
            <NavLink 
                className="block py-2 px-4 text-center rounded-lg hover:bg-sky-300" 
                style={({ isActive }) =>
                isActive ? {backgroundColor: "#7dd3fc"} : undefined
              }
                to={name === "Today" ? "/" : `/${name}`}
            >{name}</NavLink>
        </li>
    );
}

export default NavItem;