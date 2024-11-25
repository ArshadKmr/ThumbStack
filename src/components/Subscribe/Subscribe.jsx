import { MoveRight } from 'lucide-react';
const Subscribe = () => {
    return (
        <div className="my-10 p-16 flex w-full lg:flex-row flex-col">
            <div className="container mx-auto p-4 w-fit group   flex flex-col items-center justify-center">
                <div className="flex gap-2 group group-hover:gap-3 transition-all duration-500  p-3">
                    {/* First Row */}
                    <div className="aspect-square relative overflow-hidden group-hover:transition-all  duration-500  group-hover:-translate-x-1">
                        <img
                            src="/assets/subscribeImage1.png"
                            alt="Equestrian sport"
                            className="object-cover w-full "
                        />
                    </div>
                    <div className="aspect-square relative overflow-hidden group-hover:transition  duration-500  group-hover:-translate-y-2">
                        <img
                            src="/assets/subscribeImage2.png"
                            alt="Horse portrait"
                            className="aspect-square object-cover w-full "
                        />
                    </div>
                    <div className="aspect-square relative overflow-hidden">
                        <img
                            src="/assets/subscibeImage3.png"
                            alt="Horse racing"
                            className="object-cover w-full "
                        />
                    </div>
                </div>
                <div className="flex gap-2  group group-hover:gap-3">
                    {/* Second Row */}
                    <div className="aspect-square relative overflow-hidden pl-3 group-hover:transition  duration-500  group-hover:-translate-x-1">
                        <img
                            src="/assets/subscribeImage4.png"
                            alt="Training session"
                            className="object-cover w-full "
                        />
                    </div>
                    <div className="aspect-square relative overflow-hidden ">
                        <img
                            src="/assets/subscribeImage5.png"
                            alt="Horse riding"
                            className="object-cover w-full "
                        />
                    </div>
                    <div className="aspect-square relative overflow-hidden pr-3 group-hover:transition  duration-500  group-hover:translate-x-1">
                        <img
                            src="/assets/subscribeImage6.png"
                            alt="Racing practice"
                            className="object-cover w-full "
                        />
                    </div>
                </div>
            </div>
            <div className=" my-20 p-10">
                <h3 className="font-lufga font-bold text-[43px] text-red-600 leading-[56px] py-4">Stay Ahead of the Pack</h3>
                <p className="font-montserrat font-medium text-[16] leading-6 ">Sign up for tips, offers, and more</p>
                <input type="text" placeholder=" Type your email" className="p-5 border border-gray-600 rounded-full w-full my-8 h-14" />
                <button className='bg-red-600 text-white rounded-full p-3 flex gap-2 px-5 group '>Subscribe Now
                    <MoveRight className='text-white transform group-hover:translate-x-3 transition-transform duration-300' />
                </button>
                <div className="flex justify-start gap-8 my-8 ">
                    <img src="/assets/Facebook.png" alt="" />
                    <img src="/assets/Twitter.png" alt="" />
                    <img src="/assets/Instagram.png" alt="" />
                    <img src="/assets/Linkedin.png" alt="" />
                    <img src="/assets/Youtube.png" alt="" />
                </div>

            </div>
        </div >
    )
}

export default Subscribe