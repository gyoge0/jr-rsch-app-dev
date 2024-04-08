import AddItem from "@components/AddItem";
import TodoPreview from "@components/TodoPreview";
import { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { NavigationContext, TodosContext } from "../context";

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const { todos } = useContext(TodosContext);

    return (
        <NavigationContext.Provider value={navigation}>
            <View style={styles.container}>
                <AddItem onPress={() => {}} />
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoPreview item={item} key={item.id} />
                    )}
                />
            </View>
        </NavigationContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
    },
    text: {
        paddingTop: 150,
        fontSize: 25,
    },
});

export default HomeScreen;
