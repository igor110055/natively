import React, { FC, useContext } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { ThemeContext } from '../context';

type FlexProp = { flexNumber: number };

const brand: string = '../assets/brand.png';
const brandWhite: string = '../assets/brandwhite.png';

export const LogoBubble: FC<FlexProp> = ({ flexNumber }): JSX.Element => {

    const { theme: { dark, shadowColor, colors: { text } } } = useContext(ThemeContext);
    
    return (
        <View style={{ flex: flexNumber }}>
            <TouchableOpacity>
                <View style={{ ...styles.container, shadowColor}}>
                    <View style={ {...styles.bubbles, borderColor: text }}> 
                        <Image source={ dark ? require(brandWhite): require(brand)} 
                            style={ styles.logoImageBubble }/>
                    </View>
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
    logoImageBubble: {
        marginVertical: -20, 
        marginHorizontal: '7%', 
        width: 250, 
        height: 100, 
        resizeMode: 'contain'
    }
});