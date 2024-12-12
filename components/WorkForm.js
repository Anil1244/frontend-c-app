// Example work form component – pages currently implement logic inline,
// but you could refactor to use this.
export default function WorkForm({ name, setName, resources, workResources, setWorkResources, onSubmit, editing }) {

    function addResource(r) {
      if (workResources.find(wr => wr.resource_id === r.id)) return;
      setWorkResources([...workResources, { resource_id: r.id, resource_name: r.name, quantity_per_unit_work: 0 }]);
    }
  
    function updateQuantity(resource_id, q) {
      setWorkResources(workResources.map(wr => wr.resource_id === resource_id ? { ...wr, quantity_per_unit_work: parseFloat(q) } : wr));
    }
  
    return (
      <form onSubmit={onSubmit} className="space-y-2 mb-4">
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
                onClick={() => addResource(r)}>
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
                      onChange={e => updateQuantity(wr.resource_id, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          {editing ? 'Update Work' : 'Add Work'}
        </button>
      </form>
    );
  }
  