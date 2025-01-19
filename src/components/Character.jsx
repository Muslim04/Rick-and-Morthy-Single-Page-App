import React from "react";
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <tr className="align-middle">
      <td className="text-center" style={{ width: "10%" }}>
        <img
          src={character.image}
          className="rounded-circle border border-secondary"
          alt={character.name}
          width="50"
          height="50"
        />
      </td>

      <td style={{ width: "40%" }}>
        <Link to={`/character/${character.id}`} className="custom-hover-link">
          {character.name}
        </Link>
      </td>

      <td className="text-center" style={{ width: "25%" }}>
        {character.species}
      </td>

      <td className="text-center" style={{ width: "25%" }}>
        <span
          className={`badge ${
            character.status === "Alive"
              ? "bg-success"
              : character.status === "Dead"
              ? "bg-danger"
              : "bg-secondary"
          }`}
        >
          {character.status}
        </span>
      </td>
    </tr>
  );
};

export default Character;
