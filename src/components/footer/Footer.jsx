import { SOCIAL_LINKS } from "../../constants/index";
import SocialLink from "./SocialLink";

function Footer() {

    console.log(SOCIAL_LINKS);
    
    return (
        <div className=" p-3 bg-gray-400 bg-opacity-70 w-full flex_component absolute bottom-0 mt-8 ">
            <p className=" text-lg font-regular italic ">Created by MarS</p>
            <div className="flex_component">
                {SOCIAL_LINKS.map(link => <SocialLink linkName={link} />)}
            </div>
        </div>
    )
}

export default Footer;