import { useState, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ containerStyle, buttonStyle, onPress, value }) => (
    <TouchableOpacity
        style={[styles.genericContainer, containerStyle]}
        onPress={onPress}
    >
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

const MiscButton = ({ value, onPress }) => (
    <Button
        containerStyle={styles.miscContainer}
        buttonStyle={styles.misc}
        onPress={onPress}
        value={value}
    />
);
const OperatorButton = ({ value, onPress }) => (
    <Button
        containerStyle={styles.operatorContainer}
        buttonStyle={styles.operator}
        onPress={onPress}
        value={value}
    />
);

const ComplexCalculator = () => {
    const [firstOperand, setFirstOperand] = useState(null);
    const [secondOperand, setSecondOperand] = useState(null);
    const [displayedNumber, setDisplayedNumber] = useState(0);

    const [operator, setOperator] = useState(null);
    const [operatorPressed, setOperatorPressed] = useState(false);
    const [equalPressed, setEqualPressed] = useState(false);

    const appendNumber = (x) => {
        if (operatorPressed) {
            setOperatorPressed(false);
            setDisplayedNumber(x);
        } else if (equalPressed) {
            setFirstOperand(displayedNumber);
            setEqualPressed(false)
            setDisplayedNumber(x)
        } else {
            setDisplayedNumber(displayedNumber * 10 + x);
        }
    };

    function resetOperator() {
        setOperatorPressed(true);
        setEqualPressed(false);
        setFirstOperand(displayedNumber);
        setSecondOperand(null);
    }

    const add = () => {
        setOperator("+");
        resetOperator();
    };
    const subtract = () => {
        setOperator("-");
        resetOperator();
    };
    const multiply = () => {
        setOperator("*");
        resetOperator();
    };
    const divide = () => {
        setOperator("/");
        resetOperator();
    };

    const negate = () => {
        if (operatorPressed) {
            setFirstOperand(displayedNumber);
            setDisplayedNumber(0);
        } else {
            setDisplayedNumber(-1 * displayedNumber);
            if (equalPressed) {
                setFirstOperand(-1 * displayedNumber);
            }
        }
    };
    const percent = () => {
        if (operatorPressed) {
            setFirstOperand(displayedNumber);
        }
        setDisplayedNumber(displayedNumber / 100);
        if (equalPressed) {
            setFirstOperand(displayedNumber / 100);
        }
    };

    const isAcNotC = useMemo(() => {
        if (firstOperand === null && displayedNumber === 0) {
            return true;
        } else if (firstOperand === null && displayedNumber !== 0) {
            return false;
        } else if (
            firstOperand != null &&
            operatorPressed &&
            displayedNumber === 0
        ) {
            return true;
        } else {
            // noinspection RedundantIfStatementJS
            if (equalPressed && displayedNumber === 0) {
                return true;
            } else {
                return false;
            }
        }
    }, [firstOperand, displayedNumber, operatorPressed, equalPressed]);

    const clear = () => {
        if (isAcNotC) {
            setFirstOperand(null);
            setDisplayedNumber(0);
            setOperator(null);
            setOperatorPressed(false);
            setEqualPressed(false);
            setSecondOperand(null);
        } else {
            setDisplayedNumber(0);
            if (firstOperand != null) {
                setOperatorPressed(true);
            }
        }
    };

    const equal = () => {
        const a = firstOperand != null ? firstOperand : displayedNumber;
        const b = equalPressed ? secondOperand : displayedNumber;
        let result = a;

        if (!equalPressed) {
            setSecondOperand(displayedNumber);
        }

        setEqualPressed(true);

        if (operator === null) {
            result = a;
        } else if (operator === "+") {
            result = a + b;
        } else if (operator === "-") {
            result = a - b;
        } else if (operator === "*") {
            result = a * b;
        } else if (operator === "/") {
            result = a / b;
        }

        setFirstOperand(result);
        setDisplayedNumber(result);
    };

    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.displayRow}>
                <Text style={styles.displayText} numberOfLines={1}>
                    {displayedNumber}
                </Text>
            </View>
            <View style={styles.buttonRow}>
                <MiscButton value={isAcNotC ? "ac" : "c"} onPress={clear} />
                <MiscButton value="+-" onPress={negate} />
                <MiscButton value="%" onPress={percent} />
                <OperatorButton value="/" onPress={divide} />
            </View>
            <View style={styles.buttonRow}>
                <Number value={7} onPress={appendNumber} />
                <Number value={8} onPress={appendNumber} />
                <Number value={9} onPress={appendNumber} />
                <OperatorButton value="x" onPress={multiply} />
            </View>
            <View style={styles.buttonRow}>
                <Number value={4} onPress={appendNumber} />
                <Number value={5} onPress={appendNumber} />
                <Number value={6} onPress={appendNumber} />
                <OperatorButton value="-" onPress={subtract} />
            </View>
            <View style={styles.buttonRow}>
                <Number value={1} onPress={appendNumber} />
                <Number value={2} onPress={appendNumber} />
                <Number value={3} onPress={appendNumber} />
                <OperatorButton value="+" onPress={add} />
            </View>
            <View style={styles.buttonRow}>
                <Button
                    value={0}
                    onPress={() => {
                        appendNumber(0);
                    }}
                    containerStyle={styles.zeroContainer}
                    buttonStyle={styles.zero}
                />
                <Button
                    value="."
                    containerStyle={styles.numberContainer}
                    buttonStyle={styles.number}
                />
                <OperatorButton value="=" onPress={equal} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        gap: 15,
        alignItems: "center",
        padding: 5,
        paddingBottom: 75,
        backgroundColor: "black",
    },
    displayRow: {
        backgroundColor: "black",
        flexGrow: 1,
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        padding: 20,
    },
    displayText: {
        color: "white",
        fontSize: 60,
    },
    buttonRow: {
        flexGrow: 0,
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 15,
        alignItems: "center",
    },
    genericContainer: {
        padding: 20,
        borderRadius: 100,
        flexGrow: 0,
        alignItems: "center",
        fontWeight: "bold",
    },
    genericButton: {
        fontSize: 30,
        aspectRatio: 1,
        textAlign: "center",
    },
    numberContainer: {
        backgroundColor: "#333333",
    },
    number: {
        color: "white",
    },
    zeroContainer: {
        backgroundColor: "#333333",
        flexGrow: 1,
        alignItems: "flex-start",
    },
    zero: {
        color: "white",
    },
    miscContainer: {
        backgroundColor: "#a5a5a5",
    },
    misc: {
        color: "black",
    },
    operatorContainer: {
        backgroundColor: "#ff9f0a",
    },
    operator: {
        color: "white",
    },
});

export default ComplexCalculator;
