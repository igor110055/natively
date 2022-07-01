import React, { FC, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { DataContext, ThemeContext } from '../context';

export const HomeTexts: FC = (): JSX.Element => {

    const { theme: { colors: { text } } } = useContext(ThemeContext);
    const { dataState } = useContext(DataContext);

    return (
        <View style={{ flex: 1.1, paddingTop: '2%' }}>
            <Text style={{ ...styles.happyText, color: text }}>
                Happy Hacking! with TypeScript?
            </Text>
            {
                dataState.data
                    ? <Text style={{ ...styles.storeText, color: text }}>
                            Store State: Yes, you write &nbsp;
                            <Text style={{ fontWeight: "bold" }} >{dataState.data || ''}</Text>
                        </Text>
                    : <Text style={{ ...styles.storeText, color: text }}>
                            Store State: Not yet.
                    </Text>
            }
            <Text style={{ ...styles.loveText, color: text }} >Made with love by</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    happyText: {
        textAlign: 'center',
        fontSize: 25
    },
    storeText: {
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 18,
    },
    loveText: {
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 18,
    }
});