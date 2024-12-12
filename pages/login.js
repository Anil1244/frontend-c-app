import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import { useRouter } from 'next/router';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login({ session }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  if (session) {
    // Already logged in
    router.push('/');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
      return;
    }

    // After sign in, get user details
    const user_id = data.user.id;

    // Now get a backend token
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/get-token`, {
      user_id: user_id,
      email: data.user.email
    });
    const { token, role } = res.data;

    // Store token in localStorage
    localStorage.setItem('backend_token', token);
    localStorage.setItem('user_role', role);

    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}
