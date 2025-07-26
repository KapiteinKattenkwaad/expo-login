import React, { useEffect, useState } from 'react';
import { View, TextInput, Button as ButtonNative, Text } from 'react-native';
import { register } from '../utils/api';
import {
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { RootStackParamList } from '../types/types';
import { getProfile } from '../utils/api';

export default function AuthScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  const [error, setError] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
      getProfile()
        .then((user) => {
          user ? navigation.navigate('ProfileScreen') : navigation.navigate('LoginScreen')
        })
        .catch((e) => console.error(e.message));
    }, []);

  async function handleRegister() {
    try {
      setError('');
      await register(email, password, name);
      alert('Registration successful!');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <View className="p-4 space-y-4">
      <TextInput
        className="border p-2 rounded"
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"

      />
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

      <ButtonNative title="Register" onPress={handleRegister} />
      <Text>
        Have an account already?
      </Text>
      <Button onPress={() => navigation.navigate('LoginScreen')}>
        Go to login
      </Button>
    </View>
  );
}
