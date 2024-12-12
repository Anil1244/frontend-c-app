import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminIndex({ session }) {
  const router = useRouter();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('user_role');
    if (storedRole !== 'admin') {
      router.push('/');
    } else {
      setRole(storedRole);
    }
  }, [router]);

  if (!session || role !== 'admin') {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link href="/admin/resources"><span className="text-blue-600 underline cursor-pointer">Manage Resources</span></Link>
        <Link href="/admin/works"><span className="text-blue-600 underline cursor-pointer">Manage Works</span></Link>
      </div>
    </div>
  );
}
