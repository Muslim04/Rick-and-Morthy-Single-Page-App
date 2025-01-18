import React, { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import Character from "./Character";

const CharacterList = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col" className="text-center">
            Avatar
          </th>
          <th scope="col">Name</th>
          <th scope="col">Species</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((char) => (
          <Character key={char.id} character={char} />
        ))}
      </tbody>
    </table>
  );
};

export default CharacterList;
