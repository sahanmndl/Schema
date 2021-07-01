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
        flexDirection: "row",
        alignItems: "center"
    },

    dayName: {
        color: "#fff",
        textAlign: "center",
        fontSize: 17,
        marginStart: 10
    },

    circularView: {
        backgroundColor: Colors.accentBlack,
        padding: 10,
        borderRadius: 100,
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },

    codeName: {
        color: Colors.accentBlue,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center",
    }
})

export default styles