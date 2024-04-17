import { useMemo, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Todo } from "../todo";

interface TodoDetailsProps {
    todoItem: Todo;
    editable: boolean;
    buttonText?: string | null;
    onButtonPress?: ((item: Todo) => void) | null;
    navigation?: any | null;
}

const TodoDetails = ({
    todoItem,
    editable,
    buttonText = null,
    onButtonPress = null,
    navigation = null,
}: TodoDetailsProps) => {
    const [title, setTitle] = useState(todoItem.title);
    const [content, setContent] = useState(todoItem.content);

    const canSubmit = useMemo(
        () => title.length > 0 && content.length > 0,
        [title, content],
    );

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Title</Text>
                <TextInput
                    style={[styles.input, styles.titleInput]}
                    value={title}
                    onChangeText={setTitle}
                    editable={editable}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Content</Text>
                <TextInput
                    style={[styles.input, styles.contentInput]}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    textAlignVertical="top"
                    editable={editable}
                />
            </View>
            {editable && buttonText && onButtonPress && navigation ? (
                <TouchableOpacity
                    onPress={() => {
                        onButtonPress({ title, content, id: todoItem.id });
                        navigation.pop();
                    }}
                    style={[
                        styles.container,
                        styles.submitContainer,
                        canSubmit ? styles.canSubmit : styles.cantSubmit,
                    ]}
                >
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        gap: 5,
        width: 250,
        alignSelf: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    input: {
        backgroundColor: "aqua",
        width: 250,
        padding: 10,
        fontSize: 20,
        borderRadius: 5,
    },
    titleInput: {
        height: 50,
    },
    contentInput: {
        height: 200,
    },
    submitContainer: {
        marginTop: 20,
        borderRadius: 5,
    },
    canSubmit: {
        backgroundColor: "aqua",
    },
    cantSubmit: {
        backgroundColor: "gray",
    },
});

export default TodoDetails;
