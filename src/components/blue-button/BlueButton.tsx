import React from 'react'
import Button from 'ui/button/Button'
import Text from 'ui/text/Text'

interface IBlueButtonProps {
    text: string,
    width: string
    onClick?: () => void | ((e: any) => void)
}

const BlueButton: React.FC<IBlueButtonProps> = (props) => {
    return (
        <Button
            background="#D3EAFF"
            width={props.width}
            height="43px"
            activeColor="#DD377D"
            onClick={props.onClick}
        >
            <Text
                color="#000000"
                size="18px"
                weight={600}
            >
                {props.text}
            </Text>
        </Button>
    )
}

export default BlueButton