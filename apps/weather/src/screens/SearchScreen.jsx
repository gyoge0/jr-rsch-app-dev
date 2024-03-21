import { createContext, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { searchLocation } from "../api/weather";
import LocationPreview from "../components/LocationPreview";
import SearchBar from "../components/SearchBar";

export const NavigationContext = createContext("navigation");

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState("");
    const [locations, setLocations] = useState(null);

    const submit = () => {
        if (term.length < 1) {
            setLocations(null);
            return;
        }
        searchLocation(term)
            .then(setLocations)
            .catch((err) => {
                console.error(err);
                setLocations(null);
            });
    };

    return (
        <NavigationContext.Provider value={navigation}>
            <View style={styles.container}>
                <SearchBar
                    style={styles.searchBar}
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={submit}
                />

                {locations !== null && locations.length > 0 ? (
                    <FlatList
                        contentContainerStyle={styles.resultWrapper}
                        data={locations}
                        keyExtractor={(item) => `${item.lat},${item.lon}`}
                        renderItem={({ item }) => (
                            <LocationPreview location={item} />
                        )}
                    />
                ) : locations !== null ? (
                    <Text style={styles.introText}>No results found!</Text>
                ) : (
                    <Text style={styles.introText}>
                        Enter a location to get started!
                    </Text>
                )}
            </View>
        </NavigationContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    searchBar: {
        flex: 0,
    },
    introText: {
        paddingTop: 150,
        fontSize: 25,
    },
    resultWrapper: {
        padding: 20,
        maxWidth: 400,
        gap: 20,
        alignSelf: "stretch",
    },
});

export default SearchScreen;
