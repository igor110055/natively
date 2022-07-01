import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    containerPortait: {
        flex: 1,
        flexDirection: 'column'
    },
    containerLandscape: {
        flex: 1,
        flexDirection: 'row'
    },
    topContainerPortait: {
        flex: 0.4,
        paddingTop: '10%'
    },
    topContainerLandscape: {
        flex: 1,
        paddingTop: '7%'
    }
});