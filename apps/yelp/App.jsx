import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import BusinessScreen from "./src/screens/BusinessScreen";
import FoodieScreen from "./src/screens/FoodieScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    // noinspection JSXUnresolvedComponent
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Foodie">
                <Stack.Screen name="Foodie" component={FoodieScreen} />
                <Stack.Screen name="Business" component={BusinessScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
