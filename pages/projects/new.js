import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function NewProject({ session }) {
  const [projectName, setProjectName] = useState('');
  const [projectAddress, setProjectAddress] = useState('');
  const [works, setWorks] = useState([]);
  const [selectedWorks, setSelectedWorks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!session) return;
    fetchWorks();
  }, [session]);

  async function fetchWorks() {
    const token = localStorage.getItem('backend_token');
    const res = await axios.get(`${backendUrl}/api/works`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setWorks(res.data);
  }

  function addWorkToProject(w) {
    if (selectedWorks.find(sw => sw.work_id === w.id)) return;
    setSelectedWorks([...selectedWorks, { work_id: w.id, name: w.name, quantity: 0 }]);
  }

  function updateWorkQuantity(work_id, q) {
    setSelectedWorks(selectedWorks.map(sw => sw.work_id === work_id ? { ...sw, quantity: parseFloat(q) } : sw));
  }

  async function handleCreateProject(e) {
    e.preventDefault();
    const token = localStorage.getItem('backend_token');
    await axios.post(`${backendUrl}/api/projects`, {
      project_name: projectName,
      project_address: projectAddress,
      works: selectedWorks.map(sw => ({ work_id: sw.work_id, quantity: sw.quantity }))
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    router.push('/projects');
  }

  if (!session) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={handleCreateProject} className="space-y-4 mb-4">
        <input
          type="text"
          placeholder="Project Name"
          className="border p-2 w-full"
          value={projectName} onChange={e => setProjectName(e.target.value)} />
        <input
          type="text"
          placeholder="Project Address"
          className="border p-2 w-full"
          value={projectAddress} onChange={e => setProjectAddress(e.target.value)} />

        <div>
          <h2 className="font-bold mb-2">Add Works</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {works.map(w => (
              <button
                type="button"
                key={w.id}
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => addWorkToProject(w)}>
                {w.name}
              </button>
            ))}
          </div>

          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Work</th>
                <th className="p-2 text-left">Quantity (User Input)</th>
              </tr>
            </thead>
            <tbody>
              {selectedWorks.map(sw => (
                <tr key={sw.work_id}>
                  <td className="p-2">{sw.name}</td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="border p-1 w-full"
                      value={sw.quantity}
                      onChange={e => updateWorkQuantity(sw.work_id, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Create Project</button>
      </form>
    </div>
  );
}
