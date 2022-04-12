import React, { FC, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../context';

export const CryptoCurrencyText: FC = (): JSX.Element => {

    const { theme: { colors: { text } } } = useContext( ThemeContext );

    return <Text style={{ ...styles.text, color: text }}>Cryptocurrencies data</Text>;
    
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        paddingVertical: 15,
        paddingTop: '5%' 
    }
});