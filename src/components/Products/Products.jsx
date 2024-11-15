// import { Activity, ArrowRight, RefreshCw } from "lucide-react"

import { ArrowRight } from "lucide-react";

const Products = () => {
    const products = [
        {
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

    const getColorClasses = (color) => {
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
        return colorMap[color] || colorMap.orange;
    };

    return (
        <div className="container mx-auto py-8 min-w-full ">
            <div className="m-12 ">
                <h1 className="font-bold text-4xl md:text-5xl mb-4">Our <span className="text-red-600">Core</span> Products</h1>
                <p className="text-lg md:text-xl text-gray-600">
                    Keep your horse race-ready with our all-natural,
                    <br className="hidden md:block" />
                    performance-enhancing solutions.
                </p>
            </div>
            <div className="relative">
                <div className="flex flex-row overflow-x-scroll gap-6 px-10 md:px-8 pb-6">
                    {products.map((product, index) => {
                        const colorClasses = getColorClasses(product.color);

                        return (
                            <div
                                key={index}
                                className={`min-w-full sm:min-w-[56%] md:min-w-[48%] lg:min-w-[35%] xl:min-w-[28%]
                                    border border-gray-200 group hover:shadow-lg ${colorClasses.card}
                                    rounded-3xl overflow-hidden transition-all duration-300`}
                            >
                                <div className="p-6">
                                    <div className="bg-gray-100 rounded-2xl p-4 mb-6 transition-colors duration-300 group-hover:bg-gray-50">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.name}
                                            className="w-full h-40 sm:h-48 object-contain"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h2 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${colorClasses.name}`}>
                                                {product.name}
                                            </h2>
                                            <p className="text-gray-600 text-sm">
                                                {product.details}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-gray-600 text-sm">Supports :</span>
                                            {product.support.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className={`${colorClasses.icon} p-2 rounded-full transition-colors duration-300`}>
                                                        <img
                                                            src={item.icon}
                                                            alt=""
                                                            className="w-5 h-5"
                                                        />
                                                    </div>
                                                    <span className="text-sm text-gray-600">
                                                        {item.useCase}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Fixed price and button section for tablet */}
                                        <div className="flex flex-row gap-4 pt-4">
                                            <div className="flex flex-row justify-between items-center w-full">
                                                <div>
                                                    <p className={`text-2xl font-bold transition-colors duration-300 ${colorClasses.price}`}>
                                                        ${product.price}
                                                    </p>
                                                    <p className="text-gray-500 bg-gray-100 px-2 py-1 text-sm rounded-md whitespace-nowrap">
                                                        $0.75 per day
                                                    </p>
                                                </div>
                                            </div>

                                            <button className={`${colorClasses.button} flex items-center justify-center gap-2 
                                                bg-white border-2 rounded-full px-4 py-2 font-semibold 
                                                transition-all duration-300 w-full`}>
                                                Shop Now
                                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products