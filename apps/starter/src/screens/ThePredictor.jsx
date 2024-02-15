import { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    ImageBackground,
} from "react-native";

const ThePredictor = () => {
    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [prediction, setPrediction] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [predictionList, setPredictionList] = useState([
        "Yes",
        "No",
        "Try again later",
    ]);

    const setQuestion = (newText) => setText(newText);

    const updateScreen = () => {
        setDisplayText(text);
        setText("");
        const prediction =
            predictionList[Math.floor(Math.random() * predictionList.length)];
        setPrediction(prediction);
    };

    const image = {
        uri: "https://c1.staticflickr.com/6/5253/5426098861_4aee73fb6d_b.jpg",
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleBlock}>
                <Text style={styles.titleText}>The Predictor </Text>
            </View>
            <View style={styles.firstBlock}>
                <Text style={styles.questionText}>Question: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="enter your question here"
                    onChangeText={(newText) => setQuestion(newText)}
                    defaultValue={text}
                />
                <Button
                    onPress={updateScreen}
                    title="GET PREDICTION"
                    color="yellow"
                />
            </View>
            <View style={styles.secondBlock}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <Text style={styles.predictionText}>{displayText}</Text>
                    <Text style={styles.predictionText}> </Text>
                    <Text style={styles.predictionText}>{prediction}</Text>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        justifyContent: "space-between",
        flex: 1,
    },
    titleBlock: {
        backgroundColor: "black",
        flex: 1,
    },
    firstBlock: {
        backgroundColor: "darkblue",
        flex: 2,
    },
    secondBlock: {
        backgroundColor: "lightgray",
        flex: 6,
    },
    titleText: {
        color: "white",
        fontSize: 40,
        textAlign: "center",
    },
    textInput: {
        backgroundColor: "black",
        color: "white",
        height: 40,
        fontSize: 20,
    },
    questionText: {
        color: "yellow",
        fontSize: 35,
        textAlign: "center",
    },
    predictionText: {
        color: "yellow",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        justifyContent: "center",
        flex: 1,
    },
});

export default ThePredictor;
