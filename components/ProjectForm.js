// Example component – the pages currently inline their logic, but this shows how you might refactor.
export default function ProjectForm({ projectName, setProjectName, projectAddress, setProjectAddress, works, selectedWorks, setSelectedWorks, onSubmit }) {

    function addWorkToProject(w) {
      if (selectedWorks.find(sw => sw.work_id === w.id)) return;
      setSelectedWorks([...selectedWorks, { work_id: w.id, name: w.name, quantity: 0 }]);
    }
  
    function updateWorkQuantity(work_id, q) {
      setSelectedWorks(selectedWorks.map(sw => sw.work_id === work_id ? { ...sw, quantity: parseFloat(q) } : sw));
    }
  
    return (
      <form onSubmit={onSubmit} className="space-y-4 mb-4">
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
  
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Save Project</button>
      </form>
    );
  }
  