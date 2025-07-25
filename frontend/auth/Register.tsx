async function register(email: string, password: string, name?: string) {
    const res = await fetch('https://your-backend.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });
  
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to register');
    return data;
  }
  