import React from "react";

interface Character {
  image: string;
  name: string;
  species: string;
  status: string;
}

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  character: Character;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal, character }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-96">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-md w-full mb-4"
        />
        <h2 className="sm:text-xl md:text-2xl font-bold uppercase mb-2 text-[#3057d8]">
          {character.name}
        </h2>
        <p>
          <span className="font-bold text-[#20398d] md:text-2md">Species:</span>{" "}
          {character.species}
        </p>
        <p>
          <span className="font-bold text-[#20398d] md:text-2md">Status:</span>{" "}
          {character.status}
        </p>
        <button
          onClick={closeModal}
          className="mt-4 border hover:bg-red-600 bg-red-500 px-8 py-2 rounded-full uppercase text-white font-bold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
