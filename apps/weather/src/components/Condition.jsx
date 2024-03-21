import { Image, Text, View, StyleSheet } from "react-native";

export const Condition = ({ condition }) => {
    const uppercase = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <View style={styles.conditionWrapper}>
            <Text style={styles.conditionText}>
                {uppercase(condition.description)}
            </Text>
            <View
                style={
                    condition.isDay
                        ? styles.conditionImageContainerDay
                        : styles.conditionImageContainerNight
                }
            >
                <Image
                    source={{ uri: condition.icon }}
                    style={styles.conditionImage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    conditionWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
    },
    conditionText: {
        fontSize: 25,
    },
    conditionImageContainerDay: {
        borderRadius: 50,
        backgroundColor: "skyblue",
    },
    conditionImageContainerNight: {
        borderRadius: 50,
        backgroundColor: "midnightblue",
    },
    conditionImage: {
        height: 55,
        width: 55,
    },
});
