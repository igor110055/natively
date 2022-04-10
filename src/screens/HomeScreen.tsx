import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { useOrientation } from '../hooks';

import { CurrencyFlatList, LogoBubble, CryptoCurrencyText, 
        HomeTexts, ReactBubble } from '../components';
import { homeStyles } from '../styles';

export const HomeScreen: FC = (): JSX.Element => {

    const orientation = useOrientation();

    useEffect(() => {
        SplashScreen.hide();
    },[]);

    return (
        <View style={ orientation === 'P' ? homeStyles.containerPortait 
                        : homeStyles.containerLandscape}>
            <View style={ orientation === 'P' ? homeStyles.topContainerPortait
                        :  homeStyles.topContainerLandscape }>
                <ReactBubble />
                <HomeTexts />
                <LogoBubble flexNumber={  orientation === 'P' ?  0.6 : 1.3 }  />
            </View>
            <View style={{ flex: 1 }} >
                <CryptoCurrencyText />
                <CurrencyFlatList />
            </View>
        </View>
    );
};

