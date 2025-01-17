import React from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";

const ProfilePage = () => {
  const { id } = useParams();
  const { getCharacterById, loading } = CharacterContext();

  const character = getCharacterById(id);

  if (loading) return <p>Loading...</p>;
  if (!character) return <p>Character not found!</p>;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          A {character.species} from {character.origin.name}.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Origin:</strong> {character.origin.name}
        </li>
        <li className="list-group-item">
          <strong>Location:</strong> {character.location.name}
        </li>
        <li className="list-group-item">
          <strong>Status:</strong> {character.status}
        </li>
        <li className="list-group-item">
          <strong>Species:</strong> {character.species}
        </li>
        <li className="list-group-item">
          <strong>Gender:</strong> {character.gender}
        </li>
      </ul>
      <div className="card-body">
        <a
          href={`https://rickandmorty.fandom.com/wiki/${character.name.replace(
            /\s/g,
            "_"
          )}`}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
