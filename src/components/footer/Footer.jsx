

function Footer() {
    
    return (
        <div className=" p-3 bg-gray-400 bg-opacity-70 w-full flex_component absolute bottom-0 mt-8 ">
            <p className=" text-lg font-regular italic ">Created by MarS</p>
            <div className="flex_component">
                <a className=" flex_component justify-center w-9 h-9 mr-3 hover:rounded-lg hover:bg-sky-300" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img className=" w-7 h-7 " src="/images/instagram.svg" alt="instagram" />
                </a>
                
                <img className=" w-7 h-7 mr-3 " src="/images/facebook.svg" alt="facebook" />
                <img className=" w-7 h-7 " src="/images/linkedin.svg" alt="linkedIn" />
            </div>
        </div>
    )
}

export default Footer;