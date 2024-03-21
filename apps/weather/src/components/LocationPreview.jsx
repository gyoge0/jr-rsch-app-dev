import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContext } from "../screens/SearchScreen";

const LocationPreview = ({ location }) => {
    const navigation = useContext(NavigationContext);

    return (
        <TouchableOpacity
            onPress={() => navigation.push("Weather", { location })}
        >
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.name}>{location.name}</Text>
                    <Text style={styles.text}>, </Text>
                    <Text style={styles.text}>{location.state}</Text>
                </View>
                <Text style={styles.country}>{location.country}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "gainsboro",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 25,
        gap: 10,
    },
    leftContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: 275,
        flexGrow: 1,
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
    },
    text: {
        fontSize: 25,
    },
    country: {
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
    },
});

export default LocationPreview;
