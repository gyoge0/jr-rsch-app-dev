import { useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";

const Operator = ({ symbol, onPress }) => (
    <TouchableOpacity style={styles.opContainer} onPress={onPress}>
        <Text style={styles.op}>{symbol}</Text>
    </TouchableOpacity>
);

const Calculator = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [answer, setAnswer] = useState("");
    const doOp = (op) => () => {
        setAnswer(op(Number(input1), Number(input2)));
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.inputNum}
                    keyboardType="numeric"
                    value={input1}
                    onChangeText={setInput1}
                    contextMenuHidden
                />
                <TextInput
                    style={styles.inputNum}
                    keyboardType="numeric"
                    value={input2}
                    onChangeText={setInput2}
                    contextMenuHidden
                />
            </View>
            <Text style={styles.answer}>Answer: {answer}</Text>
            <View style={styles.opBox}>
                <Operator symbol="+" onPress={doOp((x, y) => x + y)} />
                <Operator symbol="-" onPress={doOp((x, y) => x - y)} />
                <Operator symbol="x" onPress={doOp((x, y) => x * y)} />
                <Operator symbol="/" onPress={doOp((x, y) => x / y)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 50,
        paddingTop: 50,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
    inputRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
    },
    inputNum: {
        width: 150,
        height: 75,
        textAlign: "center",
        fontSize: 25,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
    },
    answer: {
        fontSize: 25,
    },
    opBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 25,
        paddingLeft: "20%",
        paddingRight: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    opContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: 1,
        height: 75,
        borderRadius: 50,
        padding: 0,
        backgroundColor: "black",
    },
    op: {
        fontSize: 50,
        color: "white",
    },
});

export default Calculator;
