import AddItem from "@components/AddItem";
import TodoPreview from "@components/TodoPreview";
import { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { TodosContext } from "../todo";

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const { todos } = useContext(TodosContext);

    return (
        <View style={styles.container}>
            <AddItem
                onPress={() => {
                    navigation.push("Create");
                }}
            />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TodoPreview item={item} navigation={navigation} />
                )}
            />
        </View>
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
