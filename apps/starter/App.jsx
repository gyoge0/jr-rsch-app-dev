import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import CuteAnimals from "./src/screens/CuteAnimals";
import Home from "./src/screens/Home";
import ModifyCounter from "./src/screens/ModifyCounter";
import NorwayFlag from "./src/screens/NorwayFlag";
import ThePredictor from "./src/screens/ThePredictor";
import Snapchat from "./src/screens/Snapchat";
import SongList from "./src/screens/SongList";
import SwedenFlag from "./src/screens/SwedenFlag";

const Stack = createNativeStackNavigator();

const App = () => {
    const screens = [
        { name: "Cute Animals", component: CuteAnimals },
        { name: "Modify Counter", component: ModifyCounter },
        { name: "Snapchat", component: Snapchat },
        { name: "Sweden Flag", component: SwedenFlag },
        { name: "Song List", component: SongList },
        { name: "Norway Flag", component: NorwayFlag },
        { name: "The Predictor", component: ThePredictor },
    ];

    // noinspection JSXUnresolvedComponent
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    initialParams={{
                        screens: screens.map((screen) => screen.name),
                    }}
                />
                {screens.map(({ name, component }) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
