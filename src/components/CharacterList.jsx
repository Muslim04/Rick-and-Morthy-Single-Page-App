import React from "react";
import Character from "./Character";
import "./custom.css";

const CharacterList = ({ characters = [] }) => {
  return (
    <div className="table-responsive">
      <table className="table  text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col" style={{ width: "10%" }}>
              Avatar
            </th>
            <th scope="col" style={{ width: "40%" }}>
              Name
            </th>
            <th scope="col" style={{ width: "25%" }}>
              Species
            </th>
            <th scope="col" style={{ width: "25%" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <Character key={char.id} character={char} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterList;
