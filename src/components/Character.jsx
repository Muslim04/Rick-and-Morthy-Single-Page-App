import React from "react";
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <tr>
      <th scope="row" className="text-center">
        <img
          src={character.image}
          className="rounded"
          alt={character.name}
          width="50"
          height="50"
        />
      </th>
      <td>
        <Link to={`/${character.id}`} className="text-decoration-none">
          {character.name}
        </Link>
      </td>
      <td>{character.species}</td>
      <td>{character.status}</td>
    </tr>
  );
};

export default Character;
