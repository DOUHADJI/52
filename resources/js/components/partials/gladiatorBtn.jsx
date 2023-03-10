import { Button, Tooltip } from "@nextui-org/react"

const GladiatorBtn = ({icon, tooltip_text, onPress}) => {
    return(
        <Tooltip content={tooltip_text}>
            <Button auto onPress={onPress}>
                {icon}
            </Button>
        </Tooltip>
    )
}

export default GladiatorBtn