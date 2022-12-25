import { SOCIAL_LINKS } from "../../constants/index";
import SocialLink from "./SocialLink";

function Footer() {
    
    return (
        <footer className="p-3 bg-gray-400 bg-opacity-70 w-full mt-8">
            <div className="flex_component max-w-7xl mx-auto">
                <p className="text-lg font-regular italic">Created by MarS</p>
                <div className="flex_component">
                    {SOCIAL_LINKS.map((link, i) => <SocialLink key={i} linkName={link} />)}
                </div>
            </div>
        </footer>
    )
}

export default Footer;