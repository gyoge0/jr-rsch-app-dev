import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

export const IconButton = ({
    icon,
    onPress,
    containerStyle,
    iconStyle,
    children,
    iconPosition,
}) => (
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
        {iconPosition !== "before" ? (
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
