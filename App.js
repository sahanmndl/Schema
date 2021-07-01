import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import ChooseDepartment from "./app/screens/ChooseDepartment";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ChooseFractal from "./app/screens/ChooseFractal";
import Colors from "./app/constants/Colors";
import ChooseDay from "./app/screens/ChooseDay";
import Schedule from "./app/screens/Schedule";

const Stack = createStackNavigator()

export default function App() {

    const ChooseDepartmentScreen = () => <ChooseDepartment/>
    const ChooseFractalScreen = () => <ChooseFractal/>
    const ChooseDayScreen = () => <ChooseDay/>
    const ScheduleScreen = () => <Schedule/>

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#121212"/>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen component={ChooseDepartmentScreen} name="ChooseDepartment"
                                      options={{
                                          title: "Schema",
                                          headerStyle: {backgroundColor: Colors.tintBlack},
                                          headerTitleStyle: {fontWeight: "bold", fontSize: 24},
                                          headerTitleAlign: "center",
                                          headerTintColor: "#fff",
                                      }}/>
                        <Stack.Screen component={ChooseFractalScreen} name="ChooseFractal"
                                      options={{
                                          title: "Choose Fractal",
                                          headerStyle: {backgroundColor: Colors.tintBlack},
                                          headerTintColor: "#fff",
                                      }}/>
                        <Stack.Screen component={ChooseDayScreen} name="ChooseDay"
                                      options={{
                                          title: "Choose Day",
                                          headerStyle: {backgroundColor: Colors.tintBlack},
                                          headerTintColor: "#fff",
                                      }}/>
                        <Stack.Screen component={ScheduleScreen} name="Schedule"
                                      options={{
                                          title: "Schedule",
                                          headerStyle: {backgroundColor: Colors.tintBlack},
                                          headerTintColor: "#fff",
                                      }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accentBlack,
    },
});
