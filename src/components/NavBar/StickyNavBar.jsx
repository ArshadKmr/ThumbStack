
const StickyNavBar = () => {
    return (
        <div className="sticky top-0 z-10">
            <div className="flex text-white justify-between py-2 px-6 md:pl-20 items-center bg-gradient-to-b from-black to-transparent sticky top-0 z-10">
                <div>
                    <img
                        src="/assets/TTL landscape logo1-01.png"
                        alt="Logo"
                        className="animate-pulse hover:cursor-pointer h-20 hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                    />
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-around space-x-10 mt-5">
                    <h3 className="font-montserrat font-medium hover:cursor-pointer hover:text-red-500 hover:underline text-base  md:text-sm lg:text-lg xl:text-lg">Shop All</h3>
                    <h3 className="font-montserrat font-medium hover:cursor-pointer hover:text-red-500 hover:underline text-base  md:text-sm lg:text-lg xl:text-lg">Shop by Benefits</h3>
                    <h3 className="font-montserrat font-medium hover:cursor-pointer hover:text-red-500 hover:underline text-base  md:text-sm lg:text-lg xl:text-lg">About</h3>
                    <h3 className="font-montserrat font-medium hover:cursor-pointer hover:text-red-500 hover:underline text-base  md:text-sm lg:text-lg xl:text-lg">Bundles</h3>
                    <h3 className="font-montserrat font-medium hover:cursor-pointer hover:text-red-500 hover:underline text-base  md:text-sm lg:text-lg xl:text-lg">Contact</h3>
                </div>
                {/* Icons and mobile menu */}
                <div className="flex space-x-10 items-center">
                    <img className="h-4 w-4 hover:cursor-pointer" src="/assets/magnifier.png" alt="Search" />
                    <img className="h-4 w-4 hover:cursor-pointer" src="/assets/basket.png" alt="Basket" />
                    <img className="h-4 w-4 hover:cursor-pointer" src="/assets/person.png" alt="Person" />
                </div>
            </div>
        </div>
    )
}

export default StickyNavBar