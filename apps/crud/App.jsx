import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useState } from "react";

import { TodosContext } from "./src/context";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    const todo = {
        title: "test",
        content: "other",
        id: 1,
    };
    const [todos, setTodos] = useState([todo]);

    // noinspection JSXUnresolvedComponent
    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </TodosContext.Provider>
    );
};

export default App;
