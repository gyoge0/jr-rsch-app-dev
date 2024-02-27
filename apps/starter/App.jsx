import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import Calculator from "./src/screens/Calculator";
import ComplexCalculator from "./src/screens/ComplexCalculator"
import CuteAnimals from "./src/screens/CuteAnimals";
import FamousArtwork from "./src/screens/FamousArtwork";
import Hellos from "./src/screens/Hellos";
import Home from "./src/screens/Home";
import ModifyCounter from "./src/screens/ModifyCounter";
import NorwayFlag from "./src/screens/NorwayFlag";
import Snapchat from "./src/screens/Snapchat";
import SongList from "./src/screens/SongList";
import Spidey from "./src/screens/Spidey";
import SwedenFlag from "./src/screens/SwedenFlag";
import ThePredictor from "./src/screens/ThePredictor";

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
        { name: "Famous Artwork", component: FamousArtwork },
        { name: "Hellos", component: Hellos },
        { name: "Spidey", component: Spidey },
        { name: "Calculator", component: Calculator },
        { name: "Complex Calculator", component: ComplexCalculator },
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
