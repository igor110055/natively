import React, { FC, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator,
        Dimensions, FlatList, RefreshControl, StyleSheet } from 'react-native';

import type { TBinance } from '../types';
import { ThemeContext } from '../context';
import { useBinance } from '../hooks';

const windowWidth = Dimensions.get('window').width;

export const CurrencyFlatList: FC = (): JSX.Element => {

    const { bin, isLoading, getCurrencies, paginateCurrencies } = useBinance(); 
    
    return (
        <View style={{ marginLeft: 15, paddingTop: 13, alignItems: 'center' }}>
            <FlatList data={bin} keyExtractor={ curr => curr.symbol }
                renderItem={ ({item}) => <CurrencyCard currency={item} /> }  
                onEndReached={paginateCurrencies}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                refreshControl={ 
                    <RefreshControl enabled refreshing={isLoading} onRefresh={getCurrencies} />
                }
                ListFooterComponent={ 
                    <ActivityIndicator style={{ height: 100 }} size={20} color="grey" /> 
                }
            />
        </View>
    );
};

type CardProps = { currency: TBinance };

const CurrencyCard: FC<CardProps> = ({ currency }): JSX.Element => {
    const { theme: { colors: { text } } } = useContext( ThemeContext );

    return (
        <View style={{...styles.container, borderColor: text}} >
            <TouchableOpacity activeOpacity={0.9} >
                <View style={{...styles.bubble, width: windowWidth * 0.4}}>
                        <Text style={{ ...styles.text, color: text  }} >
                            { currency.symbol }
                        </Text>
                        <Text style={{...styles.text, fontSize: 12, color: text }} >
                            { currency.priceChangePercent + ' %' }
                        </Text>
                        <Text style={{...styles.text, fontSize: 12 , color: text  }} >
                            { currency.bidPrice }
                        </Text>
                    <Image source={ require('../assets/binance.png') } style={ styles.binanceLogo } />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
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


