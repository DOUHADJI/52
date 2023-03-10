import { Avatar, Button, Radio } from "@nextui-org/react"

const TrainingSelection = ({
    training,
    setTraining,
    options,
    label,
    error
}) => {
    return(
        <>
        <div className="grid  items-center gap-5 ">
            <label className="font-bold text-[#BF7B2A] text-lg text-center">
                {label}
            </label>
            <Radio.Group  value={training}  onChange={setTraining} label={"choisissez une option"} orientation='horizontal' size='sm' className="w-full">
                {options.map((e,index) => <Radio key={index} value={e.entrainement} className={'grid'}>
                    <div className="pl-2">
                    <p>Entrainement {e.entrainement} </p>
                    </div>
                </Radio>)}
            </Radio.Group>
        </div>
        {error? <span className=" pl-3 text-red-500 text-sm text-start ">{error}</span> : null}
    </>
    )
}

export default TrainingSelection