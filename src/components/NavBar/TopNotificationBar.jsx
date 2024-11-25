const TopNotificationBar = () => {
    return (
        <div className="bg-red-500 flex flex-col md:flex-row text-white gap-3 md:gap-5 font-montserrat font-normal p-3 text-center md:text-left justify-center items-center">
            <div className="flex items-center">
                <img src="assets/typcn_flash.png" alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <p className="pl-2">
                    <span className="underline">UNLOCK THE PRE-RACE PAS</span>TE
                </p>
            </div>
            <div>
                <p className="text-sm md:text-base">Find the sprint to be finish! 1 FREE with a 7 pack</p>
            </div>
        </div>
    )
}

export default TopNotificationBar