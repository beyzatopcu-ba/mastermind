import React from "react";
import { TouchableOpacity } from "react-native"

import styles from "./style"

const StonePit = (props) => {
    
    let color = props.stone ? props.stone.color : "#86837E";
    let circleStyle = [
        styles.circle,
        {
            backgroundColor: color
        }
    ];

    const onPress_StonePit = () => {
        props.onPress_StonePit(props.stone);
    }

    return (
        <TouchableOpacity style={circleStyle} onPress={onPress_StonePit} />
    )
}

export default StonePit;