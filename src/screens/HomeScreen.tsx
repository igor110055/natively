import React, { FC, useContext, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList, RefreshControl } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { CurrencyCard } from '../components/CurrencyCard';
import { DataContext, ThemeContext } from '../context';

import { useBinance } from '../hooks/useBinance';
import { homeStyles } from '../styles';

export const HomeScreen: FC = (): JSX.Element => {

    const { dataState } = useContext(DataContext);
    const { theme: { dark, shadowColor, colors: { text } } } = useContext(ThemeContext);
    const { bin, isLoading, getCurrencies, paginateCurrencies } = useBinance(); 

    const brand: string = '../assets/brand.png';
    const brandWhite: string = '../assets/brandwhite.png';

    useEffect(() => {
        SplashScreen.hide();
    },[]);

    return ( 

        <View style={{ flex: 2 }}> 
            <View style={{...homeStyles.shadowContainer, shadowColor}}>
                <TouchableOpacity>
                    <View style={{ ...homeStyles.bubblesWhite, borderColor: text}}> 
                        <Image source={require('../assets/logo.png')} style={homeStyles.reactImageBubble}/>
                        <Text style={{ ...homeStyles.centeredText, paddingVertical: 15, fontSize: 20, color: text }}>
                            React Native + TS Template
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.25, paddingTop: 10 }}>
                <Text style={{ ...homeStyles.centeredText, color: text }}>
                    Happy Hacking! with TypeScript?
                </Text>
                {
                    dataState.data
                        ? <Text style={{ ...homeStyles.centeredText, paddingVertical: 15, fontSize: 18, color: text }}>
                                Store State: Yes, you write &nbsp;
                                <Text style={{ fontWeight: "bold" }} >{dataState.data || ''}</Text>
                            </Text>
                        : <Text style={{ ...homeStyles.centeredText, paddingVertical: 15, fontSize: 18, color: text }}>
                                Store State: Not yet.
                        </Text>
                }
                <Text style={{ ...homeStyles.centeredText, paddingVertical: 15, color: text }} >Made with love by</Text>
            </View>
            <View style={{ flex: 0 }}>
                <TouchableOpacity>
                    <View style={{...homeStyles.shadowContainer, shadowColor}}>
                        <View style={ {...homeStyles.bubblesWhite, borderColor: text }}> 
                            <Image source={ dark ? require(brandWhite): require(brand)} 
                                style={ homeStyles.logoImageBubble }/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.1, paddingTop: 10 }}>
                <Text style={{ ...homeStyles.centeredText, fontSize: 30, color: text }}>
                    Cryptocurrencies data
                </Text>
            </View>
            <View style={{ flex: 1.3, marginLeft: 20, alignItems: 'center' }}>
                <FlatList data={bin} keyExtractor={ curr => curr.symbol }
                    renderItem={ ({item}) => <CurrencyCard currency={item}/> }  
                    onEndReached={paginateCurrencies}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    refreshControl={<RefreshControl enabled refreshing={isLoading} onRefresh={getCurrencies} />}
                    ListFooterComponent={ <ActivityIndicator style={{ height: 100 }} size={20} color="grey" /> }
                    />
            </View>
        </View>
    );
};