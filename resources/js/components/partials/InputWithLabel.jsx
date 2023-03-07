
const InputWithLabel = ({label, inputType}) => {
    return(
        <div className="flex flex-wrap justify-between items-center gap-5 ">
            <label className="font-bold text-[#BF7B2A] text-md">
                {label}
            </label>
            <input className="bg-[#DBD7D2] h-[40px] rounded-[20px] font-bold pl-5" type={inputType} />
        </div>
    )
}

export default InputWithLabel