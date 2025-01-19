import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";
import NavigationBar from "../components/NavigationBar";

const ProfilePage = () => {
  const { id } = useParams();
  const { character, fetchCharacter, loading } = useContext(CharacterContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!character)
    return <p className="text-center mt-5">Character not found!</p>;

  return (
    <>
      <NavigationBar />
      <div className="container mt-5">
        <div className="d-flex justify-content-start mb-3">
          <div className="d-flex justify-content-start mb-3">
            <button
              className="btn btn-outline-primary fw-bold d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm"
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
              </svg>
              Back to Home
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="card shadow-lg rounded" style={{ width: "20rem" }}>
            <img
              src={character.image}
              className="card-img-top rounded-top"
              alt={character.name}
            />
            <div className="card-body text-center">
              <h4 className="card-title fw-bold">{character.name}</h4>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <strong>Species:</strong> {character.species}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {character.status}
              </li>
              <li className="list-group-item">
                <strong>Origin:</strong> {character.origin.name}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> {character.location.name}
              </li>
              <li className="list-group-item">
                <strong>Gender:</strong> {character.gender}
              </li>
              <li className="list-group-item">
                <strong>Episodes:</strong> {character.episode.length}
              </li>
            </ul>
            <div className="card-body text-center">
              <a
                href={`https://rickandmortyapi.com/api/character/${id.replace(
                  /\s/g,
                  "_"
                )}`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
