import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProjectDetails({ session }) {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [works, setWorks] = useState([]);
  const [selectedWorks, setSelectedWorks] = useState([]);
  const [calcResult, setCalcResult] = useState(null);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectAddress, setNewProjectAddress] = useState('');

  useEffect(() => {
    if (!session || !id) return;
    fetchProject();
    fetchWorks();
  }, [session, id]);

  async function fetchProject() {
    const token = localStorage.getItem('backend_token');
    const res = await axios.get(`${backendUrl}/api/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setProject(res.data);
    setSelectedWorks(res.data.works.map(w => ({
      work_id: w.work_id,
      name: w.works.name,
      quantity: w.quantity
    })));
    setNewProjectName(res.data.project_name + ' Clone');
    setNewProjectAddress(res.data.project_address);
  }

  async function fetchWorks() {
    const token = localStorage.getItem('backend_token');
    const wRes = await axios.get(`${backendUrl}/api/works`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setWorks(wRes.data);
  }

  function addWorkToProject(w) {
    if (selectedWorks.find(sw => sw.work_id === w.id)) return;
    setSelectedWorks([...selectedWorks, { work_id: w.id, name: w.name, quantity: 0 }]);
  }

  function updateWorkQuantity(work_id, q) {
    setSelectedWorks(selectedWorks.map(sw => sw.work_id === work_id ? { ...sw, quantity: parseFloat(q) } : sw));
  }

  async function handleUpdateProject(e) {
    e.preventDefault();
    const token = localStorage.getItem('backend_token');
    await axios.put(`${backendUrl}/api/projects/${id}`, {
      works: selectedWorks.map(sw => ({ work_id: sw.work_id, quantity: sw.quantity }))
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchProject();
    alert('Project updated');
  }

  async function handleCalculate() {
    const token = localStorage.getItem('backend_token');
    const res = await axios.get(`${backendUrl}/api/projects/${id}/calculate`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCalcResult(res.data);
  }

  async function handleClone() {
    const token = localStorage.getItem('backend_token');
    const res = await axios.post(`${backendUrl}/api/projects/${id}/clone`, {
      new_project_name: newProjectName,
      new_project_address: newProjectAddress
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Project cloned successfully');
    router.push(`/projects/${res.data.project.id}`);
  }

  if (!session || !project) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Project: {project.project_name}</h1>
      <form onSubmit={handleUpdateProject} className="space-y-4 mb-4">
        <div>
          <h2 className="font-bold mb-2">Works in Project</h2>
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
                <th className="p-2 text-left">Quantity</th>
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

        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Update Project</button>
      </form>

      <div className="mb-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded mr-2" onClick={handleCalculate}>
          Calculate Totals
        </button>
      </div>

      {calcResult && (
        <div className="mb-4">
          <h2 className="font-bold mb-2">Calculation Results</h2>
          <table className="min-w-full bg-white mb-2">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Resource</th>
                <th className="p-2 text-left">Unit</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Rate</th>
                <th className="p-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {calcResult.resources.map(r => (
                <tr key={r.resource_name}>
                  <td className="p-2">{r.resource_name}</td>
                  <td className="p-2">{r.unit}</td>
                  <td className="p-2">{r.quantity}</td>
                  <td className="p-2">{r.rate}</td>
                  <td className="p-2">{r.amount}</td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-200">
                <td className="p-2" colSpan={4}>Total</td>
                <td className="p-2">{calcResult.total_cost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="mb-4">
        <h2 className="font-bold mb-2">Clone Project</h2>
        <input
          type="text"
          placeholder="New Project Name"
          className="border p-2 w-full mb-2"
          value={newProjectName} onChange={e => setNewProjectName(e.target.value)} />
        <input
          type="text"
          placeholder="New Project Address"
          className="border p-2 w-full mb-2"
          value={newProjectAddress} onChange={e => setNewProjectAddress(e.target.value)} />
        <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={handleClone}>Clone Project</button>
      </div>
    </div>
  );
}
