const SearchFilters = ({ setFilter }: { setFilter: Function }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select 
        name="status" 
        onChange={handleFilterChange} 
        className="rounded-full border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select 
        name="species" 
        onChange={handleFilterChange} 
        className="rounded-full border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
      >
        <option value="">Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>

      <select 
        name="gender" 
        onChange={handleFilterChange} 
        className="rounded-full border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default SearchFilters;
