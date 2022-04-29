import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Product = ({ navigation }) => {
    return (
        <View>
            <Text>Product</Text>
            <Button 
                onPress={() => navigation.navigate('Details')}
                title="Go to Details"/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Product;
