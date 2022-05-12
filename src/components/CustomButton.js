import React from "react";
import {Button} from "react-native";

const CustomButton = ({text, color, send}) => {

    return (
        <>
            <Button title={text} color={color} onPress={() => send(text)} />
        </>
    );
};

export default CustomButton;