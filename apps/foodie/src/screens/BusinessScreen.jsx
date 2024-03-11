import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const FoodieScreen = ({ route, navigation }) => {
    const { item } = route.params;

    useEffect(() => {
        // noinspection JSUnresolvedReference
        navigation.setOptions({ title: item.name });
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.content}>
                Price:{" "}
                <Text style={{ fontWeight: "bold" }}>
                    {"$".repeat(item.price)}
                </Text>
            </Text>
            <Text style={styles.content}>
                Rating:{" "}
                <Text style={{ fontWeight: "bold" }}>{item.rating}</Text>
            </Text>
            <Text style={styles.content}>
                Review Count:{" "}
                <Text style={{ fontWeight: "bold" }}>{item.review_count}</Text>
            </Text>
            <Text style={styles.content}>
                Phone: <Text style={{ fontWeight: "bold" }}>{item.phone}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
    },
    image: {
        width: "100%",
        height: 250,
        alignSelf: "center",
    },
    content: {
        paddingLeft: 10,
        fontSize: 25,
    },
});

export default FoodieScreen;
