import { StyleSheet } from "react-native";

export const storeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: { 
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        color: 'black'
    },
    centeredText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    }
});