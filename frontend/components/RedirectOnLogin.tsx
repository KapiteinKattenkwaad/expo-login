import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getProfile } from '../utils/api';
import '../global.css'
import {
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { RootStackParamList } from '../types/types';

export default function RedirectOnLogin() {
  const [error, setError] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    getProfile()
      .then((user) => {
        user ? navigation.navigate('ProfileScreen') : navigation.navigate('LoginScreen')
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <View className="p-4 space-y-4">
      {error ? (
        <Text className="text-red-500">{error}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
