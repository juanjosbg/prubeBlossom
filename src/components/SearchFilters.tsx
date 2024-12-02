import React from "react";

interface SearchFiltersProps {
  setFilter: (callback: (prev: any) => any) => void;
  toggleFavorites: () => void; // Nueva función para mostrar favoritos
  sortCharacters: (order: "asc" | "desc") => void; // Nueva función para ordenar
}

const SearchFilters = ({
  setFilter,
  toggleFavorites,
  sortCharacters,
}: SearchFiltersProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sortCharacters(e.target.value as "asc" | "desc");
  };

  return (
    <section>
      <div className="flex flex-wrap justify-between">
        <div className="cont-filter-1">
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
        </div>

        <div className="cont-filter-2">
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              onChange={handleSortChange}
              className="rounded-full border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
            >
              <option value="">Sort by Name</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            <button
              onClick={toggleFavorites}
              className="rounded-full border px-4 py-2 w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
            >
              Show Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
