import { StyleSheet } from "react-native";

export const currencyCardStyles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 0.5,
    },
    bubble: {
        height: 100,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    binanceLogo: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.7
    }
});