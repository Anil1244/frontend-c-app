import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Projects({ session }) {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!session) return;
    fetchProjects();
  }, [session]);

  async function fetchProjects() {
    const token = localStorage.getItem('backend_token');
    const res = await axios.get(`${backendUrl}/api/projects`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setProjects(res.data);
  }

  if (!session) {
    return <div>Please <Link href="/login"><span className="text-blue-600 underline">login</span></Link>.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Projects</h1>
      <Link href="/projects/new">
        <span className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer inline-block mb-4">Create New Project</span>
      </Link>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Project Name</th>
            <th className="p-2 text-left">Project Address</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map(p => (
            <tr key={p.id}>
              <td className="p-2">{p.project_name}</td>
              <td className="p-2">{p.project_address}</td>
              <td className="p-2 space-x-2">
                <Link href={`/projects/${p.id}`}>
                  <span className="text-blue-600 underline cursor-pointer">View/Edit</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
