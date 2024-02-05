import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CuteAnimals from "./src/screens/CuteAnimals";
import HomeScreen from "./src/screens/Home";

const Stack = createNativeStackNavigator();

// noinspection JSXUnresolvedComponent
const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="CuteAnimals">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CuteAnimals" component={CuteAnimals} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
