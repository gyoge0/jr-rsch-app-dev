import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import LocationScreen from "./src/screens/LocationScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    // noinspection JSXUnresolvedComponent
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Weather" component={LocationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
