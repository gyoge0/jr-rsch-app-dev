import { View, Text, StyleSheet } from "react-native";
import {  Feather} from "@expo/vector-icons";

import { Todo } from "../todo";

const TodoPreview = ({ item }: { item: Todo }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
        <Feather name="trash" style={styles.icon}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "aqua",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 200
    },
    text: {
        fontWeight: "bold",
        color: "black",
        flexGrow: 1,
        textAlign: "left"
    },
    icon: {
        fontSize: 35,
        alignSelf: "flex-end",
    }
});

export default TodoPreview;
