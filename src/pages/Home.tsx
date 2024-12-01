import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_CHARACTERS } from '../graphql/queries';
import CharacterCard from '../components/CharacterCard';
import SearchFilters from '../components/SearchFilters';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const [filter, setFilter] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Combina el filtro de nombre con los filtros adicionales
  const combinedFilters = {
    ...filter,
    name: searchTerm ? searchTerm : undefined, // solo aplica el filtro de nombre si hay un término de búsqueda
  };

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, filter: combinedFilters },
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#1e2838]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0 px-4">
                  <img src="/images/Rick-And-Morty-Emblem.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search characters..."
                    className="w-full rounded-full bg-gray-200 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-[#1e2838] uppercase">Api React And Morty</h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <SearchFilters setFilter={setFilter} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.characters.results.map((character: any) => (
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
