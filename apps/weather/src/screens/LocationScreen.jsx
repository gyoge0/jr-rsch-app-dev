import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getWeatherAt } from "../api/weather";
import LocationWeather from "../components/LocationWeather";

const LocationScreen = ({ route }) => {
    const { location } = route.params;

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
        getWeatherAt(location)
            .then(setWeather)
            .catch(() => {
                setWeather(null);
                setError(true);
            });
    }, []);

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.text}>
                    Something went wrong! Try again later!
                </Text>
            ) : weather ? (
                <LocationWeather weather={weather} location={location} />
            ) : (
                <Text style={styles.text}>Loading...</Text>
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
    text: {
        paddingTop: 150,
        fontSize: 25,
    },
});

export default LocationScreen;
