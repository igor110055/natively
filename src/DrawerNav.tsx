import React, { FC, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import { ThemeContext } from './context';
import { DrawerMenu } from './components'; 
import { StoreScreen } from './screens/StoreScreen';
import { HomeScreen } from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

export const DrawerNav: FC = (): JSX.Element => {

    const { theme } = useContext( ThemeContext );

    return (
        <NavigationContainer theme={theme} >
            <Drawer.Navigator initialRouteName="HomeEvo" drawerContent={ 
                    (props) => <DrawerMenu { ...props } /> 
                }>
                <Drawer.Screen name="Home" component={ HomeScreen } options={ homeOptions } />
                <Drawer.Screen name="Store" component={ StoreScreen }  options={ storeOptions }  />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const homeOptions: DrawerNavigationOptions = {
    title: 'My Home',
    headerStyle: {
        backgroundColor: '#3271a8'
    },
    headerTintColor: '#fff'
};

const storeOptions: DrawerNavigationOptions = {
    title: 'My Store',
    headerStyle: {
        backgroundColor: '#3271a8'
    },
    headerTintColor: '#fff'
};