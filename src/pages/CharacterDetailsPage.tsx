import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CHARACTER_DETAILS } from '../graphql/queries';

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, image, species, status, gender } = data.character;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img src={image} alt={name} className="rounded-md w-full" />
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default CharacterDetailsPage;
