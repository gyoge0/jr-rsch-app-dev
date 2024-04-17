import { Feather } from "@expo/vector-icons";
import { ComponentProps } from "react";
import type { ReactNode } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import type { StyleProp, TextStyle } from "react-native";

interface IconButtonProps {
    icon: ComponentProps<typeof Feather>["name"];
    onPress?: () => void;
    containerStyle?: StyleProp<TextStyle>;
    iconStyle?: StyleProp<TextStyle>;
    children?: ReactNode;
    iconPosition?: "before" | "after";
}

export const IconButton = ({
    icon,
    onPress = () => {},
    containerStyle = [],
    iconStyle = [],
    children,
    iconPosition = "after",
}: IconButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}
    >
        {iconPosition === "before" ? (
            <Feather name={icon} style={[styles.icon, iconStyle]} />
        ) : (
            <></>
        )}
        {children}
        {iconPosition === "after" ? (
            <Feather name={icon} style={[styles.icon, iconStyle]} />
        ) : (
            <></>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: 35,
    },
});

export default IconButton;
