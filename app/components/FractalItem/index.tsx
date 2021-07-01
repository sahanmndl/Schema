import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "../FractalItem/styles";
import {Fractal} from "../../../types";
import {useNavigation, useRoute} from "@react-navigation/native";

export type FractalItemProps = {
    fractal: Fractal
}

const FractalItem = (props: FractalItemProps) => {

    const {fractal} = props

    const navigation = useNavigation()

    const route = useRoute()
    // @ts-ignore
    const {deptID} = route.params

    const onClick = () => {
        navigation.navigate("ChooseDay", {
            fracID: fractal.id,
            deptID
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <View style={styles.innerContainer}>
                <View style={styles.circularView}>
                    <Text style={styles.codeName}>{fractal.id.toUpperCase()}</Text>
                </View>
                <Text style={styles.fractalName}>{fractal.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FractalItem