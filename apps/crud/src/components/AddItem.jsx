import IconButton from "@components/IconButton";
import { StyleSheet, Text } from "react-native";

const AddItem = ({ onPress }) => (
    <IconButton
        icon="edit"
        onPress={onPress}
        iconPosition="after"
        containerStyle={styles.container}
    >
        <Text style={styles.text}>Add Item</Text>
    </IconButton>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "aqua",
        width: 200,
    },
    text: {
        fontWeight: "bold",
        color: "black",
        flexGrow: 1,
        textAlign: "left",
        fontSize: 30,
    },
});

export default AddItem;
