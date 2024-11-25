import { Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
    return (
        <div className="pt-14 bg-black text-white overflow-hidden">
            <div className="w-full flex flex-col md:flex-row justify-evenly">
                <div className="w-1/2 mx-12 px-12 flex flex-col md:flex-row items-center ">
                    <img src="/assets/footerImage.png" alt="" />
                    <div>
                        <p className="font-lufga font-semibold text-2xl py-2"><span className="text-red-600">Trust</span> in Every Scoop</p>
                        <p className="font-montserrat font-normal text-[16px]">Non-swabbale formulas for your <br />
                            peace of mind</p>
                    </div>
                </div>
                <div className="mx-12 flex flex-col md:flex-row justify-between  items-center gap-10">
                    <div className="space-y-4">
                        <p className="font-montserrat font-bold text-xl">Quick Links</p>
                        <p className="font-montserrat font-normal text-[16px]">Shop</p>
                        <p className="font-montserrat font-normal text-[16px]">About</p>
                        <p className="font-montserrat font-normal text-[16px]">Bundles</p>
                        <p className="font-montserrat font-normal text-[16px]">Contact</p>
                    </div>
                    <div className="space-y-7">
                        <p className="font-montserrat font-bold text-xl">Contact us</p>
                        <div className="flex flex-row gap-2">
                            <Mail />
                            <p className="font-montserrat font-normal text-[16px]">contact@company.com</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Phone />
                            <p className="font-montserrat font-normal text-[16px]">(414) 687 - 5892</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <MapPin />
                            <p className="font-montserrat font-normal text-[16px]">794 Mcallister St San Francisco, 94102</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between m-10 px-10 py-7 overflow-hidden">
                <p className="font-montserrat font-medium text-sm">Copyright © 2024 The Trainer Locker</p>
                <p className="font-montserrat font-medium text-sm">All Rights Reserved | Terms and Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer