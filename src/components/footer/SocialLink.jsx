
function SocialLink({ linkName }) {
    
    return (
        <a className=" 
            flex_component 
            justify-center 
            w-9 
            h-9 
            mr-3 
            last-of-type:mr-0
            hover:rounded-lg 
            hover:bg-sky-300" 
            href={`https://www.${linkName}.com`} 
            target="_blank" 
            rel="noreferrer"
        >
            <img className=" w-7 h-7 " src={`/images/${linkName}.svg`} alt={`${linkName}`} />
        </a>
    )
}

export default SocialLink;