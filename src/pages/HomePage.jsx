import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Paginator from "../components/Paginator";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <NavigationBar onSearch={handleSearch} />
      <Paginator searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
