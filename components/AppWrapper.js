import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import SeedPhraseInput from './SeedPhraseInput';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={App} />
            <Stack.Screen name="AddAccount" component={SeedPhraseInput} />
        </Stack.Navigator>
    );
};

export default function AppWrapper() {
    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}
