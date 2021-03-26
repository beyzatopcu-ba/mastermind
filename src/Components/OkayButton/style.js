import { StyleSheet } from "react-native"
import { Platform } from "react-native"

import { height, width } from "../../Constants/Metrics"

const styles = StyleSheet.create({
    okayButtonContainer: {
    },
    okayButton: {
        backgroundColor: "#FFB53C",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: width * 0.02
    },
    okayButtonText: {
        fontSize: width * 0.085,
        fontWeight: Platform.OS == "ios" ? "900" : "bold",
        fontFamily: "Marker Felt",
        fontWeight: "normal"
    },
})

export default styles;