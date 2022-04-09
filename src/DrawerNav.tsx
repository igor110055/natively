import React, { FC, useContext } from 'react';

import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from './context';
import { DrawerMenu } from './components/DrawerMenu'; 
import { HomeScreen } from './screens/HomeScreen';
import { StoreScreen } from './screens/StoreScreen';

const Drawer = createDrawerNavigator();

export const DrawerNav: FC = (): JSX.Element => {

    const { theme } = useContext( ThemeContext );

    return (
        <NavigationContainer theme={theme} >
            <Drawer.Navigator initialRouteName="Home" 
                drawerContent={ (props) => <DrawerMenu { ...props } /> } >
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

}