import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const BusinessCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.push("Business", { item });
            }}
        >
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subtitle}>
                {item.rating} stars, {item.review_count} reviews
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
        width: 250,
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 15,
    },
    image: {
        width: 250,
        height: 125,
    },
});
export default BusinessCard;
