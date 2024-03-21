// noinspection DuplicatedCode

import { Feather } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";

const SearchBar = ({ term, onTermChange, onTermSubmit, style }) => (
    <View style={[styles.background, style]}>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeHolder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
        <Feather name="search" style={styles.icon} />
    </View>
);

const styles = StyleSheet.create({
    background: {
        paddingTop: 10,
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15,
        flexDirection: "row",
    },
    input: {
        flex: 1,
        fontSize: 18,
        borderColor: "black",
        paddingHorizontal: 5,
        borderRadius: 15,
        borderWidth: 1,
    },
    icon: {
        fontSize: 35,
        alignSelf: "center",
        paddingHorizontal: 15,
    },
});

export default SearchBar;
