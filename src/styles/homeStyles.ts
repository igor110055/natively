import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({

    shadowContainer: {
        marginHorizontal: '25%',
        width: '50%', 
        paddingTop: 5,
        marginVertical: '2%',
        borderRadius: 30,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5.84,
        elevation: 2,
    },
    bubblesBlack: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 0.2,
    },
    bubblesWhite: {
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 0.2,
    },
    centeredText: {
        textAlign: 'center',
        fontSize: 25
    },
    reactImageBubble: {
        width: 35, 
        marginVertical: 8, 
        paddingRight: 60, 
        height: 35, 
        resizeMode: 'contain' 
    },
    logoImageBubble: {
        marginVertical: -20, 
        marginHorizontal: '7%', 
        width: 250, 
        height: 100, 
        resizeMode: 'contain'
    }
});