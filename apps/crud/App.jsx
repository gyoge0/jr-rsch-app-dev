import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useState } from "react";

import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { TodosContext } from "./src/todo";

const Stack = createNativeStackNavigator();

const App = () => {
    const [todos, setTodos] = useState([]);

    // noinspection JSXUnresolvedComponent
    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Create" component={CreateScreen} />
                    <Stack.Screen name="Show" component={ShowScreen} />
                    <Stack.Screen name="Edit" component={EditScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </TodosContext.Provider>
    );
};

export default App;
