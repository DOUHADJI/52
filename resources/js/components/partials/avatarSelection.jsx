import { Avatar, Radio } from "@nextui-org/react"

const AvatarSelection = ({
    avatarIndex,
    setAvatarIndex,
    options,
    label,
    error
}) => {
    return(
        <>
        <div className="grid justify-between items-center gap-5 ">
            <label className="font-bold text-[#BF7B2A] text-lg">
                {label}
            </label>
            <Radio.Group  value={avatarIndex}  onChange={setAvatarIndex} label={"choisissez une option"} orientation='horizontal' size='sm'>
                {options.map((e,index) => <Radio key={index} value={index.toString()}>
                    <Avatar size={"xl"} src={e.avatar} />
                </Radio>)}
            </Radio.Group>
        </div>
        {error? <span className=" pl-3 text-red-500 text-sm text-start ">{error}</span> : null}
    </>
    )
}

export default AvatarSelection