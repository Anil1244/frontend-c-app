import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home({ session }) {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserRole() {
      if (!session) return;
      const user = session.user;
      // Fetch user details from Supabase 'users' table
      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

      if (!error && data) setRole(data.role);
    }
    fetchUserRole();
  }, [session]);

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Construction Calculator</h1>
        <p className="mb-4">Please <Link href="/login"><span className="text-blue-600 cursor-pointer underline">Login</span></Link> to continue.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.email}</h1>
      {role === 'admin' && (
        <div className="mb-4">
          <Link href="/admin">
            <span className="text-blue-600 underline cursor-pointer">Go to Admin Dashboard</span>
          </Link>
        </div>
      )}
      <div>
        <Link href="/projects">
          <span className="text-blue-600 underline cursor-pointer">View My Projects</span>
        </Link>
      </div>
    </div>
  );
}
