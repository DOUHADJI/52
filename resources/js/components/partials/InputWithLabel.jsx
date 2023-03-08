import { useState } from "react"

const InputWithLabel = ({label, inputType, setValue, error}) => {
    
    
    return(
        <div className="flex justify-between items-center gap-5 ">
            <label className="font-bold text-[#BF7B2A] text-lg">
                {label}
            </label>
            <div className="grid">
                <input
                    className="bg-[#DBD7D2] h-[40px] rounded-[20px] font-bold pl-5"
                    type={inputType} 
                    onChange={e => setValue(e.target.value)} 
                />
                {error? <span className=" pl-3 text-red-500 text-sm text-start w-[150px] ">{error}</span> : null}
            </div>
        </div>
    )
}

export default InputWithLabel