import React from "react";
import {FlatList, Platform, StyleSheet, View} from "react-native";
import fractals from "../data/Fractals";
import FractalItem from "../components/FractalItem";
import {useRoute} from "@react-navigation/native";
import Colors from "../constants/Colors";

export default function ChooseFractal() {

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={fractals}
                renderItem={({item}) => <FractalItem fractal={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.accentBlack,
        flex: 1
    },

    flatlist: {
        marginTop: 50,
        width: (Platform.OS === "web") ? "35%" : "90%",
    }
})