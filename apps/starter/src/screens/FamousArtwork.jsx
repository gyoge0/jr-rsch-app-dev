import { Text, StyleSheet, View, FlatList, Image } from "react-native";

const Painting = ({ title, source, artist }) => (
    <View style={styles.paintingContainer}>
        <Image style={styles.paintingImage} source={source} />
        <View style={styles.paintingDetails}>
            <Text style={styles.paintingTitle}>{title}</Text>
            <Text style={styles.paintingArtist}>{artist}</Text>
        </View>
    </View>
);

const FamousArtwork = () => {
    const images = [
        {
            title: "American Gothic",
            source: require("../images/paintings/AmericanGothic.jpg"),
            artist: "Grant Wood",
        },
        {
            title: "Mona Lisa",
            source: require("../images/paintings/MonaLisa.jpg"),
            artist: "Leonardo da Vinci",
        },
        {
            title: "Starry Night",
            source: require("../images/paintings/StarryNight.jpg"),
            artist: "Vincent van Gogh",
        },
        {
            title: "The Scream",
            source: require("../images/paintings/TheScream.jpg"),
            artist: "Edvard Munch",
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <Painting
                        title={item.title}
                        source={item.source}
                        artist={item.artist}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    paintingContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        gap: 5,
    },
    paintingImage: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: "cover",
    },
    paintingDetails: {
        flex: 1,
        backgroundColor: "lightcyan",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        gap: 5,
    },
    paintingTitle: {
        fontSize: "25",
    },
    paintingArtist: {
        width: "100%",
        backgroundColor: "lightblue",
        padding: 5,
        textAlign: "center",
    },
});

export default FamousArtwork;
