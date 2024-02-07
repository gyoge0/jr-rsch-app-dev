import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CuteAnimals from "./src/screens/CuteAnimals";
import Home from "./src/screens/Home";
import ModifyCounter from "./src/screens/ModifyCounter";
import Snapchat from "./src/screens/Snapchat";
import SwedenFlag from "./src/screens/SwedenFlag";
import SongList from "./src/screens/SongList";

const Stack = createNativeStackNavigator();

const App = () => {
    const screens = [
        { name: "Cute Animals", component: CuteAnimals },
        { name: "Modify Counter", component: ModifyCounter },
        { name: "Snapchat", component: Snapchat },
        { name: "Sweden Flag", component: SwedenFlag },
        { name: "Song List", component: SongList },
    ];

    // noinspection JSXUnresolvedComponent
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    initialParams={{
                        screens: screens.map(screen => screen.name)
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
