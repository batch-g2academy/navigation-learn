import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>About Screen</Text>
            {/* <Button 
                title="Go back"
                onPress={() => navigation.goBack()}/> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default About;
