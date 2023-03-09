
const InputWithoutLabel = ({placeholder, inputType, error, setValue}) => {
    return(
        <div className="flex flex-col justify-center items-center gap-5 ">
            <input 
                className="bg-[#DBD7D2] h-[40px] rounded-[20px] font-bold pl-5" 
                type={inputType}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)} 
             />
            {error? <span className=" pl-3 text-red-500 text-sm text-start">{error}</span> : null}
        </div>
    )
}

export default InputWithoutLabel