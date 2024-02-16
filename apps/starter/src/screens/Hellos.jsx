import { StyleSheet, View, Text } from "react-native";

const Greeting = ({ phrase, name, color }) => (
    <Text style={{ color }}>{phrase + " " + name}</Text>
);

// noinspection SpellCheckingInspection
const Hellos = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <Greeting phrase="hola" name="Nicole" color="red" />
        <Greeting phrase="guten tag" name="Henry" color="green" />
        <Greeting phrase="salve" name="Ed" color="aqua" />
        <Greeting phrase="nim hao" name="Ned" color="blue" />
        <Greeting phrase="konnichiwa" name="Sed" color="purple" />
        <Greeting phrase="anyoung haseyo" name="Fred" color="yellow" />
    </View>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    container: {
        flex: 1,
    },
});

export default Hellos;
