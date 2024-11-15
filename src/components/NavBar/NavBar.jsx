const NavBar = () => {
    return (
        <div className="video-background -mt-24 text-white relative">
            <div className="hidden md:flex">
                <div className=" ml-5 px-6 md:px-24 absolute bottom-16">
                    <p className="font-montserrat font-medium text-lg hover:cursor-pointer mb-4 md:text-lg lg:text-xl">
                        MICROSECONDS MATTER
                    </p>
                    <h1 className="font-lufga font-bold text-4xl md:text-4xl lg:text-7xl lg:leading-[80px]  md:leading-[40px] mb-6">
                        Win your hourserace <br /> with TTL supplements
                    </h1>
                    <p className="font-montserrat font-medium text-lg md:text-xl lg:text-2xl leading-[24px] sm:leading-[28px] md:leading-[30px] mb-12">
                        Scientifically formulated racehorse supplements <br /> from the home of champions
                    </p>
                    <button className="bg-red-500 rounded-full px-6 py-3 mt-5 sm:px-4 sm:py-2 hover:bg-red-800">
                        Discover
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar