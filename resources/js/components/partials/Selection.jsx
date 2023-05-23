import { Radio } from '@nextui-org/react';

const Selection = ({label, setSpecialite,specialite, options, error, orientation="vertical"}) => {
    return(
        <>
            <div className="flex justify-between items-center gap-5 ">
                <label className="font-bold text-[#BF7B2A] text-lg">
                    {label}
                </label>
                <Radio.Group  value={specialite}  onChange={setSpecialite} label={"choisissez une option"} orientation={orientation} size='sm'>
                    {options.map((e,index) => <Radio key={index} value={e.nom}>{e.nom}</Radio>)}
                </Radio.Group>
            </div>
            {error? <span className=" pl-3 text-red-500 text-sm text-start ">{error}</span> : null}
        </>
    )
}

export default Selection