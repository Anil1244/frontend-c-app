// Example component for displaying calculation results
export default function ProjectCalculator({ calcResult }) {
    if (!calcResult) return null;
  
    return (
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
    );
  }
  