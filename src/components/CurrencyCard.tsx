import React, { FC, useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';

import { TBinance } from '../types';
import { currencyCardStyles } from '../styles/currencyCardStyles';
import { ThemeContext } from '../context';

type Props = { currency: TBinance };

const windowWidth = Dimensions.get('window').width;

export const CurrencyCard: FC<Props> = ({ currency }): JSX.Element => {
    
    const { theme: { colors: { text } } } = useContext( ThemeContext );

    return (
        <View style={{...currencyCardStyles.container, borderColor: text}} >
            <TouchableOpacity activeOpacity={0.9} >
                <View style={{...currencyCardStyles.bubble, width: windowWidth * 0.4}}>
                        <Text style={{ ...currencyCardStyles.text, color: text  }} >
                            { currency.symbol }
                        </Text>
                        <Text style={{...currencyCardStyles.text, fontSize: 12, color: text }} >
                            { currency.priceChangePercent + ' %' }
                        </Text>
                        <Text style={{...currencyCardStyles.text, fontSize: 12 , color: text  }} >
                            { currency.bidPrice }
                        </Text>
                    <Image source={ require('../assets/binance.png') } style={ currencyCardStyles.binanceLogo } />
                </View>
            </TouchableOpacity>
        </View>
    );
};