import React from "react";
import {FlatList, Platform, StyleSheet, View} from "react-native";
import days from "../data/Days";
import Colors from "../constants/Colors";
import DayItem from "../components/DayItem";

export default function ChooseDay() {

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={days}
                renderItem={({item}) => <DayItem day={item}/>}
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
        width: "90%",
    }
})