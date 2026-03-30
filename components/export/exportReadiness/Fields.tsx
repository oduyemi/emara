
export const StepOneFields = ({ data, setData }: any) => {
  const fields = [
    "Full Name",
    "Email",
    "Company Name",
    "Company Address",
    "City",
    "State",
    "Country",
    "Phone Number",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Basic Information
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <input
            key={field}
            placeholder={field}
            value={data[field] || ""}
            onChange={(e) => setData({ ...data, [field]: e.target.value })}
            className="bg-white border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
        ))}
      </div>
    </div>
  );
};