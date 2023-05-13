import React from 'react';
import { Text, View } from 'react-native';

const AddressDisplay = ({ address }) => {
    return (
        <View>
            <Text>Address:</Text>
            <Text>{address}</Text>
        </View>
    );
};

export default AddressDisplay;
