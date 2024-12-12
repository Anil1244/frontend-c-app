import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AdminWorks({ session }) {
  const [works, setWorks] = useState([]);
  const [resources, setResources] = useState([]);
  const [name, setName] = useState('');
  const [workResources, setWorkResources] = useState([]);
  const [editingWork, setEditingWork] = useState(null);
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('user_role');
    if (storedRole !== 'admin') {
      router.push('/');
    } else {
      setRole(storedRole);
      fetchData();
    }
  }, [router]);

  async function fetchData() {
    const token = localStorage.getItem('backend_token');
    const rRes = await axios.get(`${backendUrl}/api/resources`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setResources(rRes.data);

    const wRes = await axios.get(`${backendUrl}/api/works`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setWorks(wRes.data);
  }

  function addResourceToWork(r) {
    if (workResources.find(wr => wr.resource_id === r.id)) return;
    setWorkResources([...workResources, { resource_id: r.id, resource_name: r.name, quantity_per_unit_work: 0 }]);
  }

  function updateWRQuantity(resource_id, qty) {
    setWorkResources(workResources.map(wr => wr.resource_id === resource_id ? { ...wr, quantity_per_unit_work: parseFloat(qty) } : wr));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem('backend_token');
    if (editingWork) {
      // Update
      await axios.put(`${backendUrl}/api/works/${editingWork.id}`, {
        name,
        resources: workResources.map(wr => ({ resource_id: wr.resource_id, quantity_per_unit_work: wr.quantity_per_unit_work }))
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      // Create
      await axios.post(`${backendUrl}/api/works`, {
        name,
        resources: workResources.map(wr => ({ resource_id: wr.resource_id, quantity_per_unit_work: wr.quantity_per_unit_work }))
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }

    setName('');
    setWorkResources([]);
    setEditingWork(null);
    fetchData();
  }

  function handleEdit(w) {
    setName(w.name);
    setWorkResources(w.resources.map(rr => ({
      resource_id: rr.resource_id,
      resource_name: rr.resource_name,
      quantity_per_unit_work: rr.quantity_per_unit_work
    })));
    setEditingWork(w);
  }

  async function handleDelete(id) {
    const token = localStorage.getItem('backend_token');
    await axios.delete(`${backendUrl}/api/works/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchData();
  }

  if (!session || role !== 'admin') return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Works</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Work Name"
          className="border p-2 w-full"
          value={name} onChange={e => setName(e.target.value)} />

        <div>
          <h2 className="font-bold mb-2">Add Resources to Work</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {resources.map(r => (
              <button
                type="button"
                key={r.id}
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => addResourceToWork(r)}>
                {r.name}
              </button>
            ))}
          </div>

          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Resource</th>
                <th className="p-2 text-left">Qty/Unit Work</th>
              </tr>
            </thead>
            <tbody>
              {workResources.map(wr => (
                <tr key={wr.resource_id}>
                  <td className="p-2">{wr.resource_name}</td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="border p-1 w-full"
                      value={wr.quantity_per_unit_work}
                      onChange={e => updateWRQuantity(wr.resource_id, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          {editingWork ? 'Update Work' : 'Add Work'}
        </button>
      </form>

      <h2 className="font-bold mb-2">Existing Works</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Work</th>
            <th className="p-2 text-left">Resources</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {works.map(w => (
            <tr key={w.id}>
              <td className="p-2">{w.name}</td>
              <td className="p-2">
                {w.resources.map(rr => (
                  <div key={rr.resource_id}>
                    {rr.resource_name}: {rr.quantity_per_unit_work} {rr.unit} per unit work
                  </div>
                ))}
              </td>
              <td className="p-2 space-x-2">
                <button onClick={() => handleEdit(w)} className="text-blue-600 underline">Edit</button>
                <button onClick={() => handleDelete(w.id)} className="text-red-600 underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
