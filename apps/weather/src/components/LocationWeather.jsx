import { StyleSheet, Text, View } from "react-native";

import { Condition } from "./Condition";

const LocationWeather = ({ weather, location }) => (
    <View style={styles.container}>
        <Text
            style={styles.header}
        >{`${location.name}, ${location.state ? location.state : location.country}`}</Text>
        <View style={styles.temperatureContainer}>
            <Text style={styles.actualTemperature}>
                {weather.temperature}&deg;
            </Text>
            <View style={styles.otherTemperatureContainer}>
                <Text style={styles.minTemperature}>
                    Min: {weather.minTemperature}&deg;
                </Text>
                <Text style={styles.maxTemperature}>
                    Max: {weather.maxTemperature}&deg;
                </Text>
                <Text style={styles.feelsLike}>
                    Feels: {weather.feelsLike}&deg;
                </Text>
            </View>
        </View>
        <View style={styles.conditionsContainer}>
            <Text style={styles.conditionsHeader}>Conditions:</Text>
            {weather.conditions.map((condition) => (
                <Condition condition={condition} key={condition} />
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingVertical: 10,
        gap: 20,
    },
    header: {
        fontSize: 35,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
    },
    temperatureContainer: {
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    actualTemperature: {
        fontSize: 80,
    },
    otherTemperatureContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 10,
    },
    minTemperature: {
        fontSize: 25,
    },
    maxTemperature: {
        fontSize: 25,
    },
    feelsLike: {
        fontSize: 25,
    },
    conditionsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingHorizontal: 50,
    },
    conditionsHeader: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default LocationWeather;
