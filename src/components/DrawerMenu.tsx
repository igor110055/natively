import React, { FC, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context';
import { drawerStyles } from '../styles';

const aquaLight: string = '../assets/Aqua-light.png';
const aquaBlack: string = '../assets/Aqua-black.png';
const brand: string = '../assets/brand.png';
const brandWhite: string = '../assets/brandwhite.png';

export const DrawerMenu: FC<DrawerContentComponentProps> = ({ navigation }): JSX.Element => {

    const { setDarkTheme, setLightTheme, theme: { dark, colors: { text } } } = useContext( ThemeContext );

    const themeToggler = (): void => {
        dark ? setLightTheme() : setDarkTheme();
    };

    return (
        <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={drawerStyles.container} >
                <View style={drawerStyles.imageAquaContainer}>
                    <Image style={{ width: 230, height: 300, resizeMode: 'contain' }}
                        source={dark ? require(aquaLight) : require(aquaBlack)}/>
                </View>
                <View style={drawerStyles.buttonsContainer}>
                    <TouchableOpacity style={drawerStyles.buttons}
                        onPress={() => navigation.navigate('Home')}>
                        <Icon name="home-outline" size={23} color={text} />
                        <Text style={{...drawerStyles.text, color: text}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={drawerStyles.buttons}
                        onPress={() => navigation.navigate('Store')}>
                        <Icon name="save-outline" size={23} color={text} />
                        <Text style={{...drawerStyles.text, color: text}}>Store</Text>
                    </TouchableOpacity>
                </View>
                <View style={drawerStyles.buttonsContainer}>
                    <TouchableOpacity style={drawerStyles.buttons}
                        onPress={themeToggler}>
                        <Icon name="color-palette-outline" size={23} color={text}/>
                        <Text style={{...drawerStyles.text, color: text}}>Change Color Mode</Text>
                    </TouchableOpacity>
                </View>
                <View style={drawerStyles.footerContainer}>
                    <Image source={ dark ? require(brandWhite): require(brand) } 
                        style={drawerStyles.footerImage}/>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};