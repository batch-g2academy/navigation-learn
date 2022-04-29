import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeNavigation from '../navigation/HomeNavigation';

const Home = ({ navigation }) => {
    // console.log(navigation);
    return (
        <HomeNavigation />
    );
}

const styles = StyleSheet.create({})

export default Home;
