import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Navbar({ session }) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('user_role');
    if (storedRole) setRole(storedRole);
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    localStorage.removeItem('backend_token');
    localStorage.removeItem('user_role');
    window.location.href = '/';
  }

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow">
      <Link href="/">
        <span className="text-xl font-bold cursor-pointer">Construction Calculator</span>
      </Link>
      <div className="space-x-4">
        {session && (
          <>
            {role === 'admin' && (
              <Link href="/admin">
                <span className="cursor-pointer underline">Admin</span>
              </Link>
            )}
            <Link href="/projects">
              <span className="cursor-pointer underline">My Projects</span>
            </Link>
            <button onClick={handleLogout} className="cursor-pointer underline">Logout</button>
          </>
        )}
        {!session && (
          <Link href="/login">
            <span className="cursor-pointer underline">Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
