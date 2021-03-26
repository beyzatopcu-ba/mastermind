import { StyleSheet } from "react-native"
import { Platform } from "react-native"

import { height, width } from "../../Constants/Metrics"

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#22211F",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: width * 0.08,
        fontWeight: Platform.OS == "ios" ? "900" : "bold",
        color: "#FFB53C",
        marginVertical: width * 0.025,
        fontFamily: "Marker Felt",
        fontWeight: "normal"
    },
})

export default styles;