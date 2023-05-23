import { Button, Tooltip } from "@nextui-org/react"

const GladiatorBtn = ({icon, tooltip_text, onPress, color="success"}) => {
    return(
        <Tooltip content={tooltip_text}>
            <Button auto onPress={onPress} color={color}>
                {icon}
            </Button>
        </Tooltip>
    )
}

export default GladiatorBtn