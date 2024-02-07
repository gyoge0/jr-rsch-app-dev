/* eslint-disable no-unused-vars */

import React from "react";
import { Button, View, StyleSheet } from "react-native";

const Home = ({ navigation, route }) => {
    const { screens } = route.params;
    return (
        <View>
            {screens.map((screen) => (
                <Button
                    title={screen}
                    onPress={() => navigation.navigate(screen)}
                    key={screen}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default Home;
