import { useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import { searchTerm } from "../api/yelp";
import BusinessCarousel from "../components/BusinessCarousel";
import SearchBar from "../components/SearchBar";

const FoodieScreen = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [error, setError] = useState(false);
    const [businesses, setBusinesses] = useState([]);

    const submit = async () => {
        const results = await searchTerm(term);
        if (results === null) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        setBusinesses(results);
    };

    // error?
    // useEffect(async () => {
    //     await submit();
    // },[])
    const [firstLoad, setFirstLoad] = useState(true);
    if (firstLoad) {
        submit().then(_ => {});
        setFirstLoad(false)
    }

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={submit}
            />
            {error && <Text style={styles.error}>Something went wrong!</Text>}
            <FlatList
                contentContainerStyle={styles.carouselsContainer}
                data={Object.keys(businesses)}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <BusinessCarousel
                        price={item}
                        businesses={businesses[item]}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        gap: 10,
        flex: 1,
    },
    error: {
        color: "red",
    },
    carouselsContainer: {
        gap: 10,
    },
});

export default FoodieScreen;
