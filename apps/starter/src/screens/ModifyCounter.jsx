import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ModifyCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonBlock}>
                <Button
                    onPress={incrementCount}
                    title="Increment"
                    color="#841584"
                />
            </View>
            <View style={styles.countBlock}>
                <Text style={styles.countText}>{count}</Text>
            </View>
            <View style={styles.buttonBlock}>
                <Button
                    onPress={decrementCount}
                    title="Decrement"
                    color="#841584"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        justifyContent: "center",
        flex: 5,
    },
    buttonBlock: {
        backgroundColor: "yellow",
        justifyContent: "center",
        flex: 1,
    },
    countBlock: {
        backgroundColor: "cornflowerblue",
        flex: 5,
        justifyContent: "center",
    },
    countText: {
        color: "crimson",
        fontSize: 90,
        textAlign: "center",
    },
});

export default ModifyCounter;
