import IconButton from "@components/IconButton";
import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Todo, TodosContext } from "../todo";

interface TodoPreviewProps {
    navigation: any;
    item: Todo;
}

const TodoPreview = ({ navigation, item }: TodoPreviewProps) => {
    const { todos, setTodos } = useContext(TodosContext);

    const remove = () => setTodos(todos.filter((todo) => todo.id !== item.id));

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.textContainer}
                onPress={() => navigation.push("Show", item)}
            >
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
            <IconButton
                icon="edit-2"
                onPress={() => navigation.push("Edit", item)}
            />
            <IconButton icon="trash" onPress={remove} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "aqua",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
    },
    textContainer: {
        flexGrow: 1,
        alignSelf: "stretch",
        justifyContent: "center",
    },
    text: {
        color: "black",
        fontSize: 20,
        textAlign: "left",
    },
    icon: {
        fontSize: 35,
        alignSelf: "flex-end",
    },
});

export default TodoPreview;
