import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.tintBlack,
        marginBottom: 18,
        borderStyle: "solid",
        borderRadius: 10,
        elevation: 6,
    },

    innerContainer: {
        padding: 15,
        flexDirection: "column",
        alignItems: "flex-start"
    },

    fractalName: {
        color: "#fff",
        textAlign: "left",
        fontSize: 17,
        marginVertical: 8
    },

    codeName: {
        color: Colors.accentBlue,
        textAlign: "left",
        fontSize: 15,
        fontWeight: "bold",
    },

    duration: {
        color: Colors.accentWhite,
        textAlign: "left",
    }
})

export default styles