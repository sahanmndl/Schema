import React from "react";
import {FlatList, Platform, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import ScheduleItem from "../components/ScheduleItem";
import {useRoute} from "@react-navigation/native";
import notice from "../data/Notice";
import CSE_F12_Monday from "../data/CSE/F12/Monday";
import CSE_F12_Tuesday from "../data/CSE/F12/Tuesday";
import CSE_F12_Wednesday from "../data/CSE/F12/Wednesday";
import CSE_F12_Thursday from "../data/CSE/F12/Thursday";
import CSE_F12_Friday from "../data/CSE/F12/Friday";
import CSE_F12_Saturday from "../data/CSE/F12/Saturday";
import DSAI_F12_Monday from "../data/DSAI/F12/Monday";
import DSAI_F12_Tuesday from "../data/DSAI/F12/Tuesday";
import DSAI_F12_Wednesday from "../data/DSAI/F12/Wednesday";
import DSAI_F12_Thursday from "../data/DSAI/F12/Thursday";
import DSAI_F12_Friday from "../data/DSAI/F12/Friday";
import DSAI_F12_Saturday from "../data/DSAI/F12/Saturday";
import EE_F12_Monday from "../data/EE/F12/Monday";
import EE_F12_Tuesday from "../data/EE/F12/Tuesday";
import EE_F12_Wednesday from "../data/EE/F12/Wednesday";
import EE_F12_Thursday from "../data/EE/F12/Thursday";
import EE_F12_Friday from "../data/EE/F12/Friday";
import EE_F12_Saturday from "../data/EE/F12/Saturday";
import ME_F12_Monday from "../data/ME/F12/Monday";
import ME_F12_Tuesday from "../data/ME/F12/Tuesday";
import ME_F12_Wednesday from "../data/ME/F12/Wednesday";
import ME_F12_Thursday from "../data/ME/F12/Thursday";
import ME_F12_Friday from "../data/ME/F12/Friday";
import ME_F12_Saturday from "../data/ME/F12/Saturday";

export default function Schedule() {

    const route = useRoute()
    // @ts-ignore
    const {deptID} = route.params
    // @ts-ignore
    const {fracID} = route.params
    // @ts-ignore
    const {dayID} = route.params

    console.log(deptID)
    console.log(fracID)
    console.log(dayID)

    const setData = () => {
        if (deptID === "cse") {
            if (fracID === "f12") {
                if (dayID === "mon") {
                    return CSE_F12_Monday
                } else if (dayID === "tue") {
                    return CSE_F12_Tuesday
                } else if (dayID === "wed") {
                    return CSE_F12_Wednesday
                } else if (dayID === "thu") {
                    return CSE_F12_Thursday
                } else if (dayID === "fri") {
                    return CSE_F12_Friday
                } else if (dayID === "sat") {
                    return CSE_F12_Saturday
                }
            } else {
                return notice
            }
        } else if (deptID === "dsai") {
            if (fracID === "f12") {
                if (dayID === "mon") {
                    return DSAI_F12_Monday
                } else if (dayID === "tue") {
                    return DSAI_F12_Tuesday
                } else if (dayID === "wed") {
                    return DSAI_F12_Wednesday
                } else if (dayID === "thu") {
                    return DSAI_F12_Thursday
                } else if (dayID === "fri") {
                    return DSAI_F12_Friday
                } else if (dayID === "sat") {
                    return DSAI_F12_Saturday
                }
            } else {
                return notice
            }
        } else if (deptID === "ee") {
            if (fracID === "f12") {
                if (dayID === "mon") {
                    return EE_F12_Monday
                } else if (dayID === "tue") {
                    return EE_F12_Tuesday
                } else if (dayID === "wed") {
                    return EE_F12_Wednesday
                } else if (dayID === "thu") {
                    return EE_F12_Thursday
                } else if (dayID === "fri") {
                    return EE_F12_Friday
                } else if (dayID === "sat") {
                    return EE_F12_Saturday
                }
            } else {
                return notice
            }
        } else if (deptID === "me") {
            if (fracID === "f12") {
                if (dayID === "mon") {
                    return ME_F12_Monday
                } else if (dayID === "tue") {
                    return ME_F12_Tuesday
                } else if (dayID === "wed") {
                    return ME_F12_Wednesday
                } else if (dayID === "thu") {
                    return ME_F12_Thursday
                } else if (dayID === "fri") {
                    return ME_F12_Friday
                } else if (dayID === "sat") {
                    return ME_F12_Saturday
                }
            } else {
                return notice
            }
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={setData()}
                renderItem={({item}) => <ScheduleItem schedule={item}/>}
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
        width: (Platform.OS === "web") ? "75%" : "90%",
    }
})