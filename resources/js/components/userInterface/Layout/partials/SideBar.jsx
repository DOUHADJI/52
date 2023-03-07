import SideBarBtn from "./SideBarBtn"


const SideBar = () => {
    const buttons = [
        {
            label : 'Dashboard',
            url : "/dashboard"
        },

        {
            label : 'Mes Ludis',
            url : "/dashboard"

        },

        {
            label : 'Entrainement',
            url : "/dashboard"

        },

        {
            label : 'Recrutement',
            url : "/dashboard"

        }
    ]
    return(
        <div  className="bg-[#FBF7F7]  rounded-l-[15px] w-[280px] pt-[90px] pb-[50px] px-12 relative">
            <div className="flex justify-center">
                <p className="font-bold text-[#4D4A4A]">
                    Pseudo
                </p>
            </div>

            <div className="flex flex-col  items-center justify-between bg-[#D9D9D9] mt-[60px] p-3">
                <p className="text-black font-bold underline ">Bourse</p>
                <p className="text-[#BF7B2A] font-bold mt-6 ">
                    <span className="text-2xl">10</span> deniers
                </p>
            </div>

            <div className="grid justify-end gap-12 mt-[90px] pr-4">
                {buttons.map((b,index) => <SideBarBtn key={index} label={b.label} url={b.url} />)}
            </div>

            <div className="mt-[150px]">
                <button className="bg-[#C08989] w-[137px] h-[41px] text-white font-bold rounded-[15px]">
                    Déconnexion
                </button>
            </div>
        </div>
    )
}

export default SideBar