import { Button, Tooltip } from "@nextui-org/react";

const GladiatorBtn = ({
    icon,
    tooltip_text,
    onPress,
    recrutableStatus,
    color = "success",
    forRecuitment,
}) => {
    return (
        <Tooltip content={tooltip_text}>
            {forRecuitment && recrutableStatus == 1 ? (
                <Button
                    auto
                    onPress={onPress}
                    color={color}
                    hidden={
                        tooltip_text !== "recruter"
                            ? true
                            : false
                    }
                >
                    {icon}
                </Button>
            ) : null}

            {recrutableStatus == 0 ? (
                <Button
                    auto
                    onPress={onPress}
                    color={color}
                    hidden={
                        tooltip_text == "recruter"
                            ? true
                            : false
                    }
                >
                    {icon}
                </Button>
            ) : null}
        </Tooltip>
    );
};

export default GladiatorBtn;
