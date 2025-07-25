async function login(email: string, password: string) {
  const res = await fetch('https://your-backend.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to login');

  // Save token securely here (e.g., expo-secure-store or async-storage)
  // await SecureStore.setItemAsync('token', data.token);

  return data;
}
