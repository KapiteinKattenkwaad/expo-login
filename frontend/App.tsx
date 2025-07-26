import { View } from 'react-native';
import './global.css';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View className='container bg-slate-200'>
      <View className=' p-8 bg-slate-300 rounded-lg'>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={AuthScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}
