import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getProfile } from '../utils/api';
import '../global.css'
// import { deleteToken } from '../utils/token';

export default function ProfileScreen({ onLogout }: { onLogout: () => void }) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getProfile()
      .then((user) => {
        setUser(user)
      })
      .catch((e) => setError(e.message));
  }, []);

  console.log({user})

  return (
    <View className="p-4 space-y-4">
      {error ? (
        <Text className="text-red-500">{error}</Text>
      ) : user ? (
        <>
          <Text>Welcome, {user.name ?? user.email}</Text>
          <Button
            title="Logout"
            onPress={async () => {
              // await deleteToken();
              onLogout();
            }}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
