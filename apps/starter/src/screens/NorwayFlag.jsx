import React from "react";
import { View, StyleSheet } from "react-native";

const NorwayFlag = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={[styles.red, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.red, styles.right]} />
            </View>
            <View style={[styles.row, styles.outerMiddleRow]}>
                <View style={[styles.white, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.white, styles.right]} />
            </View>
            <View style={[styles.row, styles.middleRow]}>
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.blue, styles.right]} />
            </View>
            <View style={[styles.row, styles.outerMiddleRow]}>
                <View style={[styles.white, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.white, styles.right]} />
            </View>
            <View style={styles.row}>
                <View style={[styles.red, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.blue, styles.left]} />
                <View style={[styles.white, styles.left]} />
                <View style={[styles.red, styles.right]} />
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
    red: {
        flex: "1",
        backgroundColor: "#BA0C2F",
    },
    blue: {
        flex: "1",
        backgroundColor: "#00205B",
    },
    white: {
        flex: "1",
        backgroundColor: "#FFFFFF",
    },
    left: {
        minWidth: "10%",
        flexGrow: "0",
    },
    right: {
        flexGrow: "1",
    },
    outerMiddleRow: {
        flexGrow: 0,
        minHeight: "5%",
    },
    middleRow: {
        flexGrow: 0,
        minHeight: "10%",
    },
});

export default NorwayFlag;
