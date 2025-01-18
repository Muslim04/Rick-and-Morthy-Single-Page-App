import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      if (!res.ok) throw new Error("Bad request");
      const data = await res.json();
      setCharacters(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCharacter = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!res.ok) throw new Error("Bad request");
      const data = await res.json();
      setCharacter(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CharacterContext.Provider
      value={{ characters, character, fetchCharacter, loading }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
