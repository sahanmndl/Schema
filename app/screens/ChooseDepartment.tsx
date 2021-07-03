import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import departments from "../data/Departments";
import DepartmentItem from "../components/DepartmentItem";
import Colors from "../constants/Colors";

export default function ChooseDepartment() {

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={departments}
                renderItem={({item}) => <DepartmentItem department={item}/>}
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