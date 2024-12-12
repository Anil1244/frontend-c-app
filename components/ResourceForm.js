export default function ResourceForm({ name, unit, rate, setName, setUnit, setRate, onSubmit, editing }) {
    return (
      <form onSubmit={onSubmit} className="space-y-2 mb-4">
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
          {editing ? 'Update Resource' : 'Add Resource'}
        </button>
      </form>
    );
  }
  