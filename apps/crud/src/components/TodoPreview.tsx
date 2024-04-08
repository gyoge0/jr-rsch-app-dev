import IconButton from "@components/IconButton";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Todo } from "../todo";

const TodoPreview = ({ item }: { item: Todo }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
        {/** @ts-ignore */}
        <IconButton icon="edit-2" />
        {/** @ts-ignore */}
        <IconButton icon="trash" />
    </View>
);

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
