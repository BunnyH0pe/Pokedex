import { Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { saveData } from "../../utils/storage";

const AddTeamButton = ({ pokemon, style }) => {
    const [isPressed, setIsPressed] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        //Set up team from asyncStorage
        if (isFocused) {
            setIsPressed(false);
        }
    }, [setIsPressed]);

    return (
        <Pressable
            style={style}
            onPress={() => {
                setIsPressed(true);
                saveData("@team", pokemon);
            }} //Save data in asyncStorage
        >
            <Icon
                name={"plus-circle"}
                color={"white"}
                size={50}
            />
        </Pressable>
    );
};

export default AddTeamButton;
