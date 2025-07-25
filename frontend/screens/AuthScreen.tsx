import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { register, login } from '../utils/api';
import { saveToken } from '../utils/token';

export default function AuthScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  const [error, setError] = useState('');

  async function handleRegister() {
    try {
      setError('');
      await register(email, password, name);
      alert('Registration successful!');
    } catch (e) {
      setError(e.message);
    }
  }

  async function handleLogin() {
    try {
      setError('');
      const { token } = await login(email, password);
      await saveToken(token);
      onLogin();
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
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text className="text-red-500">{error}</Text> : null}
      <Button title="Register" onPress={handleRegister} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
