import { MoveRight } from "lucide-react"

const Intro = () => {
    return (
        <>
            <div className='-mt-8 relative'>
                <div className="hidden lg:flex items-center justify-center gap-9">
                    <div className="flex items-center gap-2 bg-red-200 rounded-full p-3 lg:h-16 lg:w-64">
                        <img src="/assets/Package.png" alt="" className="bg-white rounded-full p-2 md:h-7 md:w-7 lg:h-10 lg:w-10" />
                        <p className="font-montserrat lg:font-medium md:font-normal">Never Got Returned<br />Products</p>
                    </div>
                    <div className="flex items-center gap-2 bg-red-200 rounded-full p-3 lg:h-16 lg:w-64 ">
                        <img src="/assets/Delivery 4.png" alt="" className="bg-white rounded-full p-2 md:h-7 md:w-7 lg:h-10 lg:w-10" />
                        <p className="font-montserrat lg:font-medium md:font-normal">Fast Delivery</p>
                    </div>
                    <div className="flex items-center gap-2 bg-red-200 rounded-full p-3 lg:h-16 lg:w-64 ">
                        <img src="/assets/Customer-Service 3.png" alt="" className="bg-white rounded-full p-2 md:h-7 md:w-7 lg:h-10 lg:w-10" />
                        <p className="font-montserrat lg:font-medium md:font-normal">Customer Support</p>
                    </div>
                    <div className="flex items-center gap-2 bg-red-200 rounded-full p-3 lg:h-16 lg:w-64 ">
                        <img src="/assets/Customer-Service 3.png" alt="" className="bg-white rounded-full p-2 md:h-7 md:w-7 lg:h-10 lg:w-10" />
                        <p className="font-montserrat lg:font-medium md:font-normal">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col m-8 sm:m-6 md:m-10 p-4 sm:p-6 md:p-10 justify-center space-y-16 sm:space-y-20 md:space-y-24">
                <div className="flex flex-col  lg:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="px-4 gap-x-10 sm:px-6 md:px-8 lg:px-10 text-center md:text-left">
                        <h4 className="font-lufga font-semibold text-xl sm:text-2xl md:text-3xl leading-tight sm:leading-snug">
                            Uniquely formulated <br /> for horse trainers
                        </h4>
                        <h3 className="text-red-500 font-lufga font-bold text-2xl sm:text-3xl md:text-5xl py-3 sm:py-4">
                            Who Want to Win
                        </h3>
                        <p className="font-montserrat font-normal text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 py-4 sm:py-5">
                            From joint health to muscle strength, our products <br /> keep your horse fit, fast, and ready to win. With <br />
                            advanced formulations trusted by top trainers, you <br /> can push past the competition and achieve the <br /> results you’ve been aiming for.
                        </p>
                        <button className="bg-red-500 hover:bg-red-700 text-white flex gap-2 font-montserrat font-medium items-center rounded-full px-4 py-2 sm:px-5 sm:py-3 mt-2">
                            Get Race Ready
                            <span>
                                <img src="/assets/arrowRight.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                            </span>
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/assets/introImage1.png"
                            alt="Intro"
                            className="m-auto my-5"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="w-full lg:w-1/2">
                        <img src="/assets/introImage2.png" alt="" className="m-auto my-5" />
                    </div>
                    <div className="px-4 sm:px-6 md:px-8 lg:px-10 text-center md:text-left">
                        <h4 className="font-lufga font-semibold text-xl sm:text-2xl md:text-3xl leading-tight sm:leading-snug">
                            Natural
                        </h4>
                        <h3 className="text-red-500 font-lufga font-bold text-2xl sm:text-3xl md:text-5xl py-3 sm:py-4">
                            Bleeder Remedy
                        </h3>
                        <p className="font-montserrat font-normal text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 py-4 sm:py-5">
                            While more than 95% of racehorses experience <br /> exercise-induced pulmonary haemorrhage (EIPH), <br /> commonly known as bleeders, you want to avoid <br /> exposing them to side effects like dehydration from <br /> potent drugs. TTL&apos;s BleederShield can help <br /> strengthen capillaries in the lungs, reduce oxidative <br /> stress, and improve blood flow.
                        </p>
                        <button className="bg-red-500 hover:bg-red-700 text-white flex gap-2 font-montserrat font-medium items-center rounded-full px-4 py-2 sm:px-5 sm:py-3 mt-2">
                            Get Race Ready
                            <MoveRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro