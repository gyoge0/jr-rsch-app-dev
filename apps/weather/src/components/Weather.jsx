import { View, Text, StyleSheet } from "react-native";

const Weather = ({ weather }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{weather.cityName}</Text>
            <View style={styles.temperatureContainer}>
                <Text style={styles.actualTemperature}>{weather.temperature}&deg;</Text>
                <View style={styles.otherTemperatureContainer}>
                    <Text style={styles.minTemperature}>Min: {weather.minTemperature}&deg;</Text>
                    <Text style={styles.maxTemperature}>Max: {weather.maxTemperature}&deg;</Text>
                    <Text style={styles.feelsLike}>Feels: {weather.feelsLike}&deg;</Text>
                </View>
            </View>
            <View style={styles.conditionsContainer}>
                <Text style={styles.conditionsHeader}>Conditions:</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 10,
        backgroundColor: "black",
        gap: 10,
    },
    header: {
        fontSize: 45,
        alignSelf: "center",
        fontWeight: "bold",
    },
    temperatureContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    actualTemperature: {
        fontSize: 40,
    },
    otherTemperatureContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        fontSize: 20,
        gap: 5,
    },
    minTemperature: {
        fontSize: 20,
    },
    maxTemperature: {
        fontSize: 20,
    },
    feelsLike: {
        fontSize: 20,
    },
    conditionsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "black"
    },
    conditionsHeader: {
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Weather;
