import { Text, View, FlatList, StyleSheet } from "react-native";

import BusinessCard from "./BusinessCard";
import getPriceText from "../api/prices";

const BusinessCarousel = ({ price, businesses, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{getPriceText(price)}</Text>
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
