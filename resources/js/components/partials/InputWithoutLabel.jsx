
const InputWithoutLabel = ({placeholder, inputType}) => {
    return(
        <div className="flex flex-wrap justify-between items-center gap-5 ">
            <input 
                className="bg-[#DBD7D2] h-[40px] rounded-[20px] font-bold pl-5" 
                type={inputType}
                placeholder={placeholder}
             />
        </div>
    )
}

export default InputWithoutLabel