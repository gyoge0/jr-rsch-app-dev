import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const SongList = () => {
    // noinspection SpellCheckingInspection
    const songs = [
        { song: "All night alone", year: "2019" },
        { song: "Madan", year: "2018" },
        { song: "HeadNoise", year: "2019" },
        { song: "Blame", year: "2019" },
        { song: "Loneliness", year: "2019" },
        { song: "On Top of the world", year: "2019" },
        { song: "Summer", year: "2014" },
        { song: "levels", year: "2020" },
        { song: "Do it Right", year: "2017" },
    ];
    return (
        <FlatList
            data={songs}
            keyExtractor={(item) => item.song}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.text}>
                        {item.song} - {item.year}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default SongList;
