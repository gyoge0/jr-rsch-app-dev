import { StyleSheet, Text, View } from "react-native";
import { Todo } from "../todo";
import TodoPreview from "@components/TodoPreview";

const HomeScreen = () => {
    const todo: Todo = {
        title: "test",
        content: "other",
    };

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <TodoPreview item={todo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        paddingTop: 150,
        fontSize: 25,
    },
});

export default HomeScreen;
