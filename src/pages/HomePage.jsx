import React, { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import CharacterList from "../components/CharacterList";
import { CharacterContext } from "../context/CharacterContext";

const HomePage = () => {
  // const [activePage, setActivePage] = useState(1);
  // const [rowsPerPage] = useState(5);
  // const { data } = useContext(CharacterContext);
  // const totalPages = Math.ceil(data.length / rowsPerPage);

  // const prev = () => {
  //   if (activePage > 1) {
  //     setActivePage((prev) => prev - 1);
  //   }
  // };
  // const next = () => {
  //   if (activePage < totalPages) {
  //     setActivePage((prev) => prev + 1);
  //   }
  // };

  // const start = (activePage - 1) * rowsPerPage;
  // const end = activePage * rowsPerPage;
  // const sliced = data.slice(start, end);

  // const filtered = sliced.filter((el) =>
  //   el.name.toLowerCase().includes(input.toLowerCase())
  // );
  return (
    <div>
      <NavigationBar />
      <CharacterList />
    </div>
  );
};

export default HomePage;
