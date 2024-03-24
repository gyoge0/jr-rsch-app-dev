import { Text, View, FlatList, StyleSheet } from "react-native";

import BusinessCard from "./BusinessCard";
import getRatingText from "../api/ratings";

const BusinessCarousel = ({ rating, businesses, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{getRatingText(rating)}</Text>
            <FlatList
                contentContainerStyle={styles.scrollWrapper}
                data={businesses}
                horizontal
                showsHorizontalScrollIndicator={false} // Hide scroll indicator for horizontal
                renderItem={({ item }) => (
                    <BusinessCard item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        gap: 5,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
    },
    scrollWrapper: {
        gap: 10,
    },
});

export default BusinessCarousel;
