import React from "react";
import {Department} from "../../../types";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

export type DepartmentItemProps = {
    department: Department
}

const DepartmentItem = (props: DepartmentItemProps) => {

    const {department} = props

    const navigation = useNavigation()

    const onClick = () => {
        navigation.navigate("ChooseFractal", {
            deptID: department.id
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <View style={styles.innerContainer}>
                <View style={styles.circularView}>
                    <Text style={styles.codeName}>{department.id.toUpperCase()}</Text>
                </View>
                <Text style={styles.deptName}>{department.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DepartmentItem