import React, { useState } from "react";
import { HeartIcon } from '@heroicons/react/24/outline';

interface SearchFiltersProps {
  setFilter: (callback: (prev: any) => any) => void;
  toggleFavorites: () => void;
  sortCharacters: (order: "asc" | "desc") => void;
  closeModal: () => void;
}

const SearchFilters = ({
  setFilter,
  toggleFavorites,
  sortCharacters,
  closeModal,
}: SearchFiltersProps) => {
  const [tempFilters, setTempFilters] = useState({
    status: "",
    species: "",
    gender: "",
  });

  const handleTempFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTempFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    setFilter((prev: any) => ({
      ...prev,
      ...tempFilters,
    }));
    closeModal();
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sortCharacters(e.target.value as "asc" | "desc");
  };

  return (
    <section>
      <div className="flex flex-wrap justify-between">
        {/* Filtros */}
        <div className="cont-filter-1 mt-3">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Filters
          </label>
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              name="status"
              value={tempFilters.status}
              onChange={handleTempFilterChange}
              className="rounded-md border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
            >
              <option value="">Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>

            <select
              name="species"
              value={tempFilters.species}
              onChange={handleTempFilterChange}
              className="rounded-md border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
            >
              <option value="">Species</option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
            </select>

            <select
              name="gender"
              value={tempFilters.gender}
              onChange={handleTempFilterChange}
              className="rounded-md border px-2 py-2 w-full sm:w-auto hover:bg-blue-400 hover:text-white"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="cont-filter-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Actions
          </label>
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              onChange={handleSortChange}
              className="items-center gap-2 px-4 py-2 border rounded-md focus:ring-4 sm:w-auto hover:bg-blue-400 hover:text-white"
            >
              <option value="">Sort by Name</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            <button
              onClick={toggleFavorites}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:ring-4 focus:ring-red-300"
            >
              <HeartIcon className="w-5 h-5" />
              Favorites
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="mt-4 bg-[#bdbdbd] text-white px-4 py-2 rounded-md hover:bg-[#8054C7] w-full"
      >
        Apply Filters
      </button>
    </section>
  );
};

export default SearchFilters;
