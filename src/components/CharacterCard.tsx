import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { HeartIcon } from '@heroicons/react/24/outline';

interface Character {
  image: string;
  name: string;
  species: string;
  status: string;
  occupation?: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: Character) => fav.name === character.name));
  }, [character.name]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav: Character) => fav.name !== character.name
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(character);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img src={character.image} alt={character.name} className="rounded-md w-full" />
      <h2 className="text-lg font-bold text-center uppercase mt-5">{character.name}</h2>
      <p className="text-center">{character.species}</p>

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={openModal}
          className="border hover:bg-green-500 bg-green-600 px-4 py-2 rounded-full uppercase text-white font-bold w-72 md:text-sm"
        >
          View Details
        </button>

        <button
          onClick={toggleFavorite}
          className={`px-4 py-2 rounded-full uppercase font-bold w-14 md:text-sm hover:border 
    ${isFavorite
              ? "bg-red-500 hover:bg-red-600 text-white md:text-md"
              : " text-black md:text-md"
            }`}
        >
          <HeartIcon
            className={`w-6 h-6 ${isFavorite ? "text-white" : "text-black"}`}
          />
        </button>
      </div>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        character={character}
      />
    </div>
  );
};

export default CharacterCard;
