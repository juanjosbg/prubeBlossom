import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Modal = ({ showModal, closeModal, character }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-96">
        <img src={character.image} alt={character.name} className="rounded-md w-full mb-4" />
        <h2 className="sm:text-xl md:text-2xl font-bold uppercase mb-2 text-[#3057d8]">{character.name}</h2>
        <p><span className="font-bold text-[#20398d] md:text-2md">Species: </span> {character.species}</p>
        <p><span className="font-bold text-[#20398d] md:text-2md">Status: </span> {character.status}</p>
        {/* Más detalles */}
        <button onClick={closeModal}
          className="mt-4 border hover:bg-red-600 bg-red-500 px-8 py-2 rounded-full uppercase text-white font-bold">
          Close
        </button>
      </div>
    </div>
  );
};

const CharacterCard = ({ character }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img src={character.image} alt={character.name} className="rounded-md w-full"/>
      <h2 className="text-lg font-bold text-center uppercase mt-5">{character.name}</h2>
      <p className="text-center">{character.species}</p>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={openModal}
          className="border hover:bg-green-500 bg-green-600 px-8 py-2 rounded-full uppercase text-white font-bold w-96"
        >
          View Details
        </button>
      </div>

      <Modal showModal={showModal} closeModal={closeModal} character={character} />
    </div>
  );
};

export default CharacterCard;
