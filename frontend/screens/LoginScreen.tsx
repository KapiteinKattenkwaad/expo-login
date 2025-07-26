import React, { useState } from 'react';
import { View, TextInput, Button as NativeButton, Text } from 'react-native';
import { login } from '../utils/api';
import { saveToken } from '../utils/token';
import { Button } from '@react-navigation/elements';
import {
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { RootStackParamList } from '../types/types';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  async function handleLogin() {
    try {
      setError('');
      const { token } = await login(email, password);
      await saveToken(token);
      navigation.navigate('ProfileScreen')
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <View className="p-4 space-y-4">
      <TextInput
        className="border p-2 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        className="border p-2 rounded"
        placeholder="Password"
        value={password}
        passwordRules='required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text className="text-red-500">{error}</Text> : null}
      <NativeButton title="Login" onPress={handleLogin} />
      <Text>
        Don't have an account yet?
      </Text>
      <Button onPress={() => navigation.navigate('AuthScreen')}>
        Register here
      </Button>
    </View>
  );
}
