import { Check } from "lucide-react"

const Group4 = () => {
    return (
        <div className="bg-red-50 flex flex-col lg:flex-row p-20">
            <div className="w-1/2 py-10 ">
                <h3 className="font-lufga font-bold text-[43px]"><span className="text-red-500">Subscribe </span> & Save</h3>
                <p className="font-montserrat font-normal text-[21px] text-gray-400 pt-1 pb-10">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="mt-10">
                    <div className="py-5 flex items-center gap-5">
                        <Check className="text-white bg-red-500 rounded-full w-4 h-4 ring-1 ring-red-500" />
                        <h3 className="font-lufga font-medium text-2xl">Save Upto 20%</h3>
                    </div>
                    <div className="py-5 flex items-center gap-5">
                        <Check className="text-white bg-red-500 rounded-full w-4 h-4 ring-1 ring-red-500" />
                        <h3 className="font-lufga font-medium text-2xl">From as little as $0.70 a day</h3>
                    </div>
                    <div className="py-5 flex items-center gap-5">
                        <Check className="text-white bg-red-500 rounded-full w-4 h-4 ring-1 ring-red-500" />
                        <h3 className="font-lufga font-medium text-2xl">Pause or cancel anytime</h3>
                    </div>
                    <button className="mt-3 px-5 py-3 rounded-full border border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white">Shop Now</button>
                </div>
            </div>
            <div className="flex relative ">
                <img src="/src/assets/group4image.png" alt="" className="" />
                <img src="/src/assets/Perfect+Performance+Pack.png" alt="" className="absolute top-7 left-28" />
            </div>
        </div>
    )
}

export default Group4