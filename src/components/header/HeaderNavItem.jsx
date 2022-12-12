import { Link } from "react-router-dom";

function NavItem({ name }) {
    return (
        <li className="
            font-regular 
            text-xl 
            mr-2 
            last-of-type:mr-0
            py-2 px-4
            hover:rounded-xl
            hover:bg-sky-300
        ">
            <Link to={name === "Today" ? "/" : `/${name}`}>{name}</Link>
        </li>
    );
}

export default NavItem;