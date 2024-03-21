import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { searchWeather } from "../api/weather";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";

const HomeScreen = () => {
    const [term, setTerm] = useState("");
    const [weather, setWeather] = useState(null);

    const submit = () => {
        searchWeather(term)
            .then(setWeather)
            .catch((err) => {
                console.error(err);
                setWeather(null);
            });
    };

    return (
        <View style={styles.container}>
            <SearchBar
                style={styles.searchBar}
                term={term}
                onTermChange={setTerm}
                onTermSubmit={submit}
            />
            {weather ? (
                <Weather weather={weather} />
            ) : (
                <Text style={styles.introText}>
                    Enter a zip code to get started!
                </Text>
            )}
        </View>
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
});

export default HomeScreen;
