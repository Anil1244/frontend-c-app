import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AdminResources({ session }) {
  const [resources, setResources] = useState([]);
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [rate, setRate] = useState('');
  const [editingResource, setEditingResource] = useState(null);
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('user_role');
    if (storedRole !== 'admin') {
      router.push('/');
    } else {
      setRole(storedRole);
      fetchResources();
    }
  }, [router]);

  async function fetchResources() {
    const token = localStorage.getItem('backend_token');
    const res = await axios.get(`${backendUrl}/api/resources`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setResources(res.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem('backend_token');
    if (editingResource) {
      // Update
      await axios.put(`${backendUrl}/api/resources/${editingResource.id}`, {
        name, unit, rate: parseFloat(rate)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      // Create
      await axios.post(`${backendUrl}/api/resources`, {
        name, unit, rate: parseFloat(rate)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setName('');
    setUnit('');
    setRate('');
    setEditingResource(null);
    fetchResources();
  }

  function handleEdit(r) {
    setName(r.name);
    setUnit(r.unit);
    setRate(r.rate);
    setEditingResource(r);
  }

  async function handleDelete(id) {
    const token = localStorage.getItem('backend_token');
    await axios.delete(`${backendUrl}/api/resources/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchResources();
  }

  if (!session || role !== 'admin') return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Resources</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Resource Name"
          className="border p-2 w-full"
          value={name} onChange={e => setName(e.target.value)} />
        <input
          type="text"
          placeholder="Unit (e.g. day, bag, hour)"
          className="border p-2 w-full"
          value={unit} onChange={e => setUnit(e.target.value)} />
        <input
          type="number"
          placeholder="Rate"
          className="border p-2 w-full"
          value={rate} onChange={e => setRate(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          {editingResource ? 'Update Resource' : 'Add Resource'}
        </button>
      </form>

      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Unit</th>
            <th className="p-2 text-left">Rate</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {resources.map(r => (
            <tr key={r.id}>
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.unit}</td>
              <td className="p-2">{r.rate}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => handleEdit(r)} className="text-blue-600 underline">Edit</button>
                <button onClick={() => handleDelete(r.id)} className="text-red-600 underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
