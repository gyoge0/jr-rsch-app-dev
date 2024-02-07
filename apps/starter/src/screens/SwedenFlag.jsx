import React from "react";
import { View, StyleSheet } from "react-native";

const SwedenFlag = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.gold, styles.left]} />
                <View style={[styles.blue, styles.right]} />
            </View>
            <View style={[styles.row, styles.middleRow]}>
                <View style={[styles.gold, styles.left]} />
                <View style={[styles.gold, styles.left]} />
                <View style={[styles.gold, styles.right]} />
            </View>
            <View style={styles.row}>
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.gold, styles.left]} />
                <View style={[styles.blue, styles.right]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
    },
    row: {
        flex: "1",
        display: "flex",
        flexDirection: "row",
        height: "50px",
    },
    blue: {
        flex: "1",
        backgroundColor: "#006AA7",
    },
    gold: {
        flex: "1",
        backgroundColor: "#FFCD00",
    },
    left: {
        minWidth: "25%",
        flexGrow: "0",
    },
    right: {
        flexGrow: "1",
    },
    middleRow: {
        flexGrow: 0,
        minHeight: "25%",
    },
});

export default SwedenFlag;
