import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_CHARACTERS } from '../graphql/queries';
import CharacterCard from '../components/CharacterCard';
import SearchFilters from '../components/SearchFilters';
import { Dialog } from '@headlessui/react';
import { TiFlowParallel } from "react-icons/ti";

const Home = () => {
  const [filter, setFilter] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [characters, setCharacters] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Nuevo estado para el modal

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    console.log('Filters or search term updated:', { filter, searchTerm });
  }, [filter, searchTerm]);

  const combinedFilters = {
    ...filter,
    name: searchTerm ? searchTerm : undefined,
  };

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, filter: combinedFilters },
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const sortCharacters = (order: 'asc' | 'desc') => {
    const sorted = [...data?.characters.results].sort((a, b) => {
      if (order === 'asc') return a.name.localeCompare(b.name);
      if (order === 'desc') return b.name.localeCompare(a.name);
      return 0;
    });
    setCharacters(sorted);
  };

  const toggleFavorites = () => {
    if (!showFavorites) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setCharacters(favorites);
    } else {
      setCharacters(data?.characters.results);
    }
    setShowFavorites(!showFavorites);
  };

  useEffect(() => {
    if (data) {
      setCharacters(data?.characters.results);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section>
      <div className="min-h-full flex">
        <aside className="w-1/4 bg-gray-100 p-4">
          <header>
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-thin tracking-tight text-[#1e2838] uppercase">
                Api React And Morty
              </h2>
            </div>
          </header>

          <div className="mb-6">
            <form className="flex items-center max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="simple-search" className="sr-only">Search or filter Results</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search characters..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                />
              </div>
              <button
                type="button"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-[#8054C7] rounded-lg border border-[#5A3696] hover:bg-[#5A3696] focus:ring-4 focus:outline-none"
                onClick={openModal}
              >
                <TiFlowParallel />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <hr />
          
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mt-3 h-auto mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Starred Characters
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
              {characters
                .filter((character: any) => {
                  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
                  return favorites.some((fav: any) => fav.name === character.name);
                })
                .map((character: any) => (
                  <div key={character.id} className="flex max-w-xs p-2 border rounded-lg shadow hover:shadow-lg">
                    <img src={character.image} alt={character.name} className="rounded-md w-40 h-20 object-cover mx-auto" />
                    <div className="flex flex-col w-full">
                      <h2 className="sm:text-sm md:text-md font-bold text-center mt-2">{character.name}</h2>
                      <p className="sm:text-xs md:text-md text-center">{character.species}</p>
                      <div className="flex justify-center mt-2">
                        <button
                          onClick={() => openModal()}
                          className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs w-36"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <hr />
        </aside>

        {/* Modal */}
        <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
              <Dialog.Title className="text-lg font-semibold text-gray-900">
                Search Filters
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-500 mb-4">
                Use the filters below to refine your search.
              </Dialog.Description>
              <SearchFilters
                setFilter={setFilter}
                sortCharacters={sortCharacters}
                toggleFavorites={toggleFavorites}
              />
            </Dialog.Panel>
          </div>
        </Dialog>

        <main className="w-3/4">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {characters.map((character: any) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Home;
