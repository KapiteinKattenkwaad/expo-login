import { View, Text } from 'react-native';
import './global.css'
import { useEffect, useState } from 'react';
import AuthScreen from './screens/AuthScreen';
import ProfileScreen from './screens/ProfileScreen';
import { getToken } from './utils/token';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    getToken()
      .then((token) => {
        console.log({ token })
        setIsLoggedIn(!!token)
      })
      .catch((error) => {
        console.error(error)
      })
      ;
  }, []);

  if (isLoggedIn === null) return (
    <View>
      <Text>
        Not logged in
      </Text>
    </View>
  );

  return isLoggedIn ? (
    <View>
     <Text className='p-4 font-bold text-gray-800 text-xl '>Profile</Text>
      <ProfileScreen onLogout={() => setIsLoggedIn(false)} />
    </View>
  ) : (
    <View>
      <Text className='p-4 text-red-400'>
        Register
      </Text>
      <AuthScreen onLogin={() => setIsLoggedIn(true)} />
    </View>
  );
}
