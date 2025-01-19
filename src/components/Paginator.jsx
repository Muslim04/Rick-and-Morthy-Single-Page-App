import { useState, useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import CharacterList from "./CharacterList";

const Paginator = ({ searchTerm }) => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 5;
  const { characters } = useContext(CharacterContext);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCharacters.length / rowsPerPage)
  );

  if (activePage > totalPages) setActivePage(totalPages);

  const start = (activePage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const slicedCharacters = filteredCharacters.slice(start, end);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <div>
      <CharacterList characters={slicedCharacters} />

      <nav
        className="d-flex justify-content-center mt-4"
        aria-label="Page navigation"
      >
        <ul className="pagination">
          <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(activePage - 1)}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li
              key={page}
              className={`page-item ${page === activePage ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              activePage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(activePage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;
