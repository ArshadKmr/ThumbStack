import { useState } from "react";

const InteractiveDots = () => {
    const products = [
        {
            id: "un-lock-plus",
            imageSrc: "/src/assets/UnlockImage.png",
            name: "UN-LOCK+",
            details: "Horserace performance muscle formula for endurance, fatigue and recovery",
            support: [
                {
                    icon: "/src/assets/Endurance.png",
                    useCase: "Endurance"
                },
                {
                    icon: "/src/assets/Recovery.png",
                    useCase: "Recovery"
                }
            ],
            price: "149.00",
            color: "orange",
        },
        {
            id: "flexify-ha",
            imageSrc: "/src/assets/flexiImage.png",
            name: "Flexify-HA",
            details: "Joint support formula for cartilage, flexibility and joint health",
            support: [
                {
                    icon: "/src/assets/Joint-Health-Blue 1.png",
                    useCase: "Joint Health"
                }
            ],
            price: "149.00",
            color: "cyan",
        },
        {
            id: "epo-equine",
            imageSrc: "/src/assets/epoImage.png",
            name: "EPO-Equine",
            details: "All-natural blood builder optimises oxygen levels for peak performance",
            support: [
                {
                    icon: "/src/assets/O2 1.png",
                    useCase: "Oxygen Levels"
                }
            ],
            price: "149.00",
            color: "red",
        },
        {
            id: "bleeder-shield",
            imageSrc: "/src/assets/bleederImage.png",
            name: "Bleeder Shield",
            details: "One-of-a-kind respiratory formula. Now comes in a powder",
            support: [
                {
                    icon: "/src/assets/lungs.png",
                    useCase: "Lungs Support"
                }
            ],
            price: "149.00",
            color: "purple",
        },
        {
            id: "eq-royal",
            imageSrc: "/src/assets/royalImage.png",
            name: "EQ-Royal",
            details: "Natural blood builder focused on optimising performance for equestrian horses.",
            support: [
                {
                    icon: "/src/assets/performance.png",
                    useCase: "Performance"
                }
            ],
            price: "149.00",
            color: "green",
        }
    ];

    const [currentProduct, setCurrentProduct] = useState(products[0]);

    const colorMap = {
        orange: {
            button: "text-orange-500 border-orange-500 group-hover:bg-orange-500 group-hover:text-white",
            price: "text-orange-500",
            name: "group-hover:text-orange-500",
            card: "group-hover:border-orange-500 hover:border-orange-500",
            icon: "bg-orange-100 "
        },
        cyan: {
            button: "text-cyan-500 border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white",
            price: "text-cyan-500",
            name: "group-hover:text-cyan-500",
            card: "hover:border-cyan-500 hover:border-cyan-500",
            icon: "bg-cyan-100"
        },
        red: {
            button: "text-red-600 border-red-600 group-hover:bg-red-500 group-hover:text-white",
            price: "text-red-600",
            name: "group-hover:text-red-500",
            card: "hover:border-red-500 hover:border-red-500",
            icon: "bg-red-100"
        },
        purple: {
            button: "text-purple-600 border-purple-600 group-hover:bg-purple-500 group-hover:text-white",
            price: "text-purple-600",
            name: "group-hover:text-purple-500",
            card: "hover:border-purple-500 hover:border-purple-500",
            icon: "bg-purple-100"
        },
        green: {
            button: "text-green-700 border-green-700 group-hover:bg-green-700 group-hover:text-white",
            price: "text-green-700",
            name: "group-hover:text-green-700",
            card: "hover:border-green-700 hover:border-green-700",
            icon: "bg-green-100 "
        }
    };

    const color = colorMap[currentProduct.color]

    const showProduct = (productId) => {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
            setCurrentProduct(selectedProduct);
        }
    };
    return (
        <div className="ml-16 mt-12 p-10">
            <h1 className="font-lufga font-bold text-[43px]">
                <span className="text-red-600">Support</span> Your Horse, Head to Hoof
            </h1>
            <p className="font-montserrat font-normal text-[21px]">Click to learn how our products enhance specific areas.</p>
            <div className="flex flex-col xl:flex-row gap-5 w-full mt-10">
                <div className="w-1/4">
                    <div className={`group ${color.card} bg-white rounded-3xl border border-gray-200 overflow-hidden cursor-pointer`}>
                        <div className="p-6">
                            <div className="bg-gray-50 rounded-2xl p-2 mb-6">
                                <img
                                    src={currentProduct?.imageSrc}
                                    alt={currentProduct?.name}
                                    className="w-60 h-60"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h2 className={` ${color.name} text-2xl font-bold mb-2`}>{currentProduct?.name}</h2>
                                    <p className="text-gray-600 text-sm">
                                        {currentProduct?.details}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-600 text-sm">Supports:</span>
                                    {currentProduct?.support.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className={`${color.icon} p-2 rounded-full`}>
                                                <img src={item?.icon} alt={item?.useCase} />
                                            </div>
                                            <span className="text-sm">{item?.useCase}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                                    <div>
                                        <p className={`text-2xl font-bold ${color.price}`}>{currentProduct?.price}</p>
                                        <p className="text-gray-500 bg-gray-100 px-2 py-1 text-sm rounded-md">$0.75 per day</p>
                                    </div>
                                    <button className={`group flex items-center justify-center gap-2 bg-white border-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${color.button}`}>
                                        Shop Now
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative rounded-lg "                >
                    <img src="/src/assets/Horse.png" alt="" className="2xl::min-w-[1042px] xl:min-w-[890px] lg:min-w-[760px]" />
                    <button
                        onClick={() => showProduct("epo-equine")}
                        className={`${currentProduct.id === "epo-equine" ? "bg-red-800 ring-8 ring-red-100" : "bg-white"
                            } h-5 w-5 rounded-full absolute top-36 left-52`}
                    />
                    <button
                        onClick={() => showProduct("bleeder-shield")}
                        className={`${currentProduct.id === "bleeder-shield" ? "bg-purple-400 ring-8 ring-purple-100" : "bg-white"
                            } h-5 w-5 rounded-full absolute bottom-40 left-96`}
                    />
                    <button
                        onClick={() => showProduct("un-lock-plus")}
                        className={`${currentProduct.id === "un-lock-plus" ? "bg-orange-400 ring-8 ring-orange-100 " : "bg-white"
                            } h-6 w-6 rounded-full absolute top-72 right-60`}
                    />
                    <button
                        onClick={() => showProduct("flexify-ha")}
                        className={`${currentProduct.id === "flexify-ha" ? "bg-cyan-400 ring-8 ring-cyan-100 " : "bg-white"
                            } h-6 w-6 rounded-full absolute bottom-10 right-80`}
                    />
                </div>
            </div>
        </div>
    )
}

export default InteractiveDots