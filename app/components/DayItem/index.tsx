import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Day} from "../../../types";
import styles from "./styles";

export type DayItemProps = {
    day: Day
}

const DayItem = (props: DayItemProps) => {

    const {day} = props

    const navigation = useNavigation()

    const route = useRoute()
    // @ts-ignore
    const {deptID} = route.params
    // @ts-ignore
    const {fracID} = route.params

    const onClick = () => {
        navigation.navigate("Schedule", {
            dayID: day.id,
            fracID,
            deptID
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <View style={styles.innerContainer}>
                <View style={styles.circularView}>
                    <Text style={styles.codeName}>{day.id.toUpperCase()}</Text>
                </View>
                <Text style={styles.dayName}>{day.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DayItem