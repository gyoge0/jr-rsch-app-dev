import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ containerStyle, buttonStyle, onPress, value}) => (
    <TouchableOpacity style={[styles.genericContainer, containerStyle]} onPress={onPress}>
        <Text style={[styles.genericButton, buttonStyle]}>{value}</Text>
    </TouchableOpacity>
);


const Number = ({ value, onPress }) => (
    <Button
        containerStyle={styles.numberContainer}
        buttonStyle={styles.number}
        onPress={() => onPress(value)}
        value={value}
    />
);

const MiscButton = ({ value, onPress}) => (
    <Button
        containerStyle={styles.miscContainer}
        buttonStyle={styles.misc}
        onPress={onPress}
        value={value}
    />
)
const OperatorButton = ({ value, onPress}) => (
    <Button
        containerStyle={styles.operatorContainer}
        buttonStyle={styles.operator}
        onPress={onPress}
        value={value}
    />
)

const ComplexCalculator = () => {
    const [number, setNumber] = useState(0);

    const appendNumber = (x) => {
        setNumber(number * 10 + x);
    };

    let onNumberPress = appendNumber;

    const negate = () => setNumber(number * -1);
    const clear = () => {
        onNumberPress = appendNumber;
        setNumber(0);
    };
    const percent = () => setNumber(number / 100);

    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.displayRow}>
                <Text>{number}</Text>
            </View>
            <View style={styles.buttonRow}>
                <MiscButton value={"clr"} onPress={clear} />
                <MiscButton value={"+-"} onPress={negate} />
                <MiscButton value={"%"} onPress={percent} />
                <OperatorButton value={"+"}/>
            </View>
            <View style={styles.buttonRow}>
                <Number value={1} onPress={onNumberPress} />
                <Number value={2} onPress={onNumberPress} />
                <Number value={3} onPress={onNumberPress} />
            </View>
            <View style={styles.buttonRow}>
                <Number value={4} onPress={onNumberPress} />
                <Number value={5} onPress={onNumberPress} />
                <Number value={6} onPress={onNumberPress} />
            </View>
            <View style={styles.buttonRow}>
                <Number value={7} onPress={onNumberPress} />
                <Number value={8} onPress={onNumberPress} />
                <Number value={9} onPress={onNumberPress} />
            </View>
            <View style={styles.buttonRow}>
                <Button
                    value={0}
                    onPress={() => {onNumberPress(0)}}
                    containerStyle={styles.zeroContainer}
                    buttonStyle={styles.zero}
                />
                <Button
                    value={"."}
                    onPress={() => {onNumberPress(0)}}
                    containerStyle={styles.numberContainer}
                    buttonStyle={styles.number}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
    },
    buttonRow: {
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black"
    },
    genericContainer: {
        padding: 25,
        borderRadius: 100,
        flexGrow: 0,
        alignItems: "center"
    },
    genericButton: {
        fontSize: 35,
        aspectRatio: 1,
        textAlign: "center",
    },
    numberContainer: {
        backgroundColor: "gray",
    },
    number: {
        color: "white",
    },
    zeroContainer: {
        backgroundColor: "gray",
        flexGrow: 1,
        marginRight: 5,
    },
    zero: {
        color: "white",
    },
    miscContainer: {
        backgroundColor: "lightgray",
    },
    misc: {
        color: "black",
    },
    operatorContainer: {
        backgroundColor: "orange",
    },
    operator: {
        color: "white",
    },
});

export default ComplexCalculator;
