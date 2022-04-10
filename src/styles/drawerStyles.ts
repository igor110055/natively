import { StyleSheet } from "react-native";

export const drawerStyles = StyleSheet.create({
    container: { height: '100%' },
    text: {
        paddingHorizontal: 10, 
        fontSize: 20, 
        color: "black" 
    },
    imageAquaContainer: {
        marginHorizontal: 20
    },
    imageAqua: {
        width: 230, 
        height: 300, 
        resizeMode: 'contain' 
    },
    buttonsContainer: {
        flex: 1,
        marginVertical: -40,
        marginHorizontal: 50 
    },
    buttons: {
        marginVertical: 10, 
        flexDirection: 'row'
    },
    footerContainer: {
        marginTop: 'auto', 
        paddingVertical: 10 
    },
    footerImage: {
        width: 280, 
        height: 50, 
        resizeMode: 'contain'
    }
});