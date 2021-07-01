import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Schedule} from "../../../types";
import styles from "./styles";

export type ScheduleItemProps = {
    schedule: Schedule
}

const ScheduleItem = (props: ScheduleItemProps) => {

    const {schedule} = props

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.codeName}>{schedule.id}</Text>
                <Text style={styles.fractalName}>{schedule.name}</Text>
                <Text style={styles.duration}>{schedule.duration}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ScheduleItem