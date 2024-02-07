import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CuteAnimals from "./src/screens/CuteAnimals";
import HomeScreen from "./src/screens/Home";
import ModifyCounter from "./src/screens/ModifyCounter";
import Snapchat from "./src/screens/Snapchat";

const Stack = createNativeStackNavigator();

// noinspection JSXUnresolvedComponent
const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Snapchat">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CuteAnimals" component={CuteAnimals} />
            <Stack.Screen name="ModifyCounter" component={ModifyCounter} />
            <Stack.Screen name="Snapchat" component={Snapchat} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
