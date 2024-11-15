
const Trainers = () => {
    const products = [
        {
            "image": "/src/assets/trainer1.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
        },
        {
            "image": "/src/assets/tainer2.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
        },
        {
            "image": "/src/assets/trainer3.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
        },
        {
            "image": "/src/assets/trainer4.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
        },
        {
            "image": "/src/assets/trainer5.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
        },
        {
            "image": "/src/assets/trainer6.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
        },
        {
            "image": "/src/assets/tainer2.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience, I’ve trained horses of all temperaments and riders of all skill levels, guiding them toward success.",
        },
        {
            "image": "/src/assets/trainer3.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience, I’ve trained horses of all temperaments and riders of all skill levels, guiding them toward success.",
        },
        {
            "image": "/src/assets/trainer4.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience, I’ve trained horses of all temperaments and riders of all skill levels, guiding them toward success.",
        },
        {
            "image": "/src/assets/tainer2.jpeg",
            "details": "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience, I’ve trained horses of all temperaments and riders of all skill levels, guiding them toward success.",
        },
    ]
    return (
        <div className=" my-16">
            <div className="m-5 sm:m-10">
                <h3 className="font-lufga font-bold text-2xl sm:text-3xl md:text-[43px] my-3 sm:my-5 leading-[36px] sm:leading-[46px] md:leading-[56px]">
                    <span className="text-red-600">Trusted by trainers</span> <br />
                    across New Zealand and Australia
                </h3>
                <p className="font-montserrat font-normal text-base sm:text-lg md:text-[21px] leading-6 sm:leading-7 md:leading-8">
                    Outperform the competition. Your horse’s energy, stamina, and recovery can be <br className="hidden sm:block" />
                    the 1% difference between first and second place. Combat fatigue, muscle <br className="hidden sm:block" />
                    stiffness, and cramping with TTL’s top-selling products, formulated for optimal <br className="hidden sm:block" />
                    performance and endurance.
                </p>
            </div>
            <div>
                <div className="flex flex-row overflow-x-scroll gap-6 px-10  py-3">
                    {products.map((product, index) => {

                        return (
                            <div
                                key={index}
                                className={`min-w-full sm:min-w-[56%] md:min-w-[48%] lg:min-w-[35%] xl:min-w-[28%]
                                    shadow-lg
                                    rounded-xl overflow-hidden transition-all duration-300 p-3 max-h-fit`}
                                style={{
                                    boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)'
                                }}>
                                <div className="rounded-2xl  transition-colors duration-300 group-hover:bg-gray-50">
                                    <img
                                        src={product.image}
                                        alt="trainer img"
                                        className="w-full h-40 sm:h-48 rounded-2xl object-cover"
                                    />
                                </div>

                                <div className="my-5 ">
                                    <p className="font-montserrat line-clamp-4 px-1 text-ellipsis font-medium text-[16.5px] text-gray-600">
                                        {product.details}
                                    </p>
                                </div>

                                <div className="flex flex-row p-4 mt-10 bg-gray-100 rounded-xl">
                                    <div className="w-1/5">
                                        <img className="rounded-xl h-[52px] w-[52px]" src="/src/assets/img.jpeg" />
                                    </div>
                                    <div className="flex flex-row justify-between px-2 items-center w-full">
                                        <div>
                                            <p className="font-montserrat font-medium text-[16.5px]">James Morgan</p>
                                            <p className="font-montserrat font-medium text-gray-500  text-sm rounded-md whitespace-nowrap">
                                                Certificate IV in Horse Racing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trainers