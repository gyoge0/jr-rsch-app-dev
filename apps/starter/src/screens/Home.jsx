/* eslint-disable no-unused-vars */

import React from "react";
import { Button, View, StyleSheet, FlatList } from "react-native";

const Home = ({ navigation, route }) => {
    const { screens } = route.params;
    return (
        <View>
            <FlatList
                data={screens}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Button
                        title={item}
                        onPress={() => navigation.navigate(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default Home;
