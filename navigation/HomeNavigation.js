import React from 'react';
import {View, StyleSheet} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Product" component={ Product } />
            <Stack.Screen name="Details" component= { Detail }/>
        </Stack.Navigator>        
    );
}

const styles = StyleSheet.create({})

export default HomeNavigation;
