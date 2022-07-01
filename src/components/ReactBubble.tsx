import React, { FC, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { ThemeContext } from '../context';

export const ReactBubble: FC = (): JSX.Element => {

    const { theme: { shadowColor, colors: { text } } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.container, shadowColor }}>
            <TouchableOpacity>
                <View style={{ ...styles.bubbles, borderColor: text }}>
                    <Image source={require('../assets/logo.png')} style={styles.reactImageBubble}/>
                    <Text style={{ ...styles.text, color: text }}>
                        React Native + TS Template
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '25%',
        width: '50%',
        paddingTop: 5,
        borderRadius: 30,
        backgroundColor: 'transparent',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5.84,
        elevation: 2,
    },
    bubbles: {
        flexDirection: 'row',
        borderWidth: 0.2,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 15,
    },
    reactImageBubble: {
        width: 35,
        marginVertical: 8,
        paddingRight: 60,
        height: 35,
        resizeMode: 'contain'
    }
});