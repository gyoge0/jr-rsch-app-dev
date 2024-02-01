import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CuteAnimals from "./src/screens/CuteAnimals";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        CuteAnimals: CuteAnimals,
    },
    {
        initialRouteName: "CuteAnimals",
        defaultNavigationOptions: {
            title: "App",
        },
    },
);

export default createAppContainer(navigator);
