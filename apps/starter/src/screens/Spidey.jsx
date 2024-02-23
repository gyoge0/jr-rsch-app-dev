import { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
} from "react-native";

const SpideyCounterDetail = ({
    imageSource,
    onIncrease,
    onDecrease,
    count,
}) => (
    <View style={styles.counterContainer}>
        <TouchableOpacity
            onPress={onIncrease}
            style={styles.counterImageWrapper}
        >
            <Image source={imageSource} style={styles.counterImage} />
        </TouchableOpacity>
        <View style={styles.counterTextWrapper}>
            <TouchableOpacity
                onPress={onDecrease}
                style={styles.counterTextButton}
            >
                <Text style={styles.counterText}>{count}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const SpiderCounter = ({ imageSource }) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count === 0 ? 0 : count - 1);
    };

    return (
        <SpideyCounterDetail
            imageSource={imageSource}
            onIncrease={incrementCount}
            onDecrease={decrementCount}
            count={count}
        />
    );
};

const Spidey = () => {
    // noinspection SpellCheckingInspection
    const spideys = [
        require("../images/spidey/TobeyMaguire.jpg"),
        require("../images/spidey/AndrewGarfield.jpg"),
        require("../images/spidey/TomHolland.jpg"),
    ];

    return (
        <FlatList
            data={spideys}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <SpiderCounter imageSource={item} />}
        />
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        display: "flex",
        flexDirection: "row",
        height: 200,
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    counterImageWrapper: {
        flex: 1,
        height: "100%",
    },
    counterImage: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    counterTextWrapper: {
        flex: 1,
        height: "100%",
    },
    counterTextButton: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    counterText: {
        fontSize: 50,
    },
});

export default Spidey;
