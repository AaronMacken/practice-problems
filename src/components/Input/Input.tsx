type InputProps = {
  searchTerm: string;
  onChange: (input: string) => void;
};

const Input = ({ searchTerm, onChange }: InputProps) => {
  return (
    <>
      <label htmlFor="user-search" className="sr-only">
        Search users
      </label>
      <input
        id="user-search"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        className="font-mono mt-5 w-full max-w-xs rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
};

export default Input;
