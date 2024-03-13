import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const url = "https://api.punkapi.com/v2/beers";
  const [beerData, setBeerData] = useState();
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const getData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setLoading(false);
        setBeerData(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const filterProductsBySearch = () => {
    if (!inputSearch) {
      return beerData;
    } else {
      return beerData.filter((data) =>
        data?.name.toLowerCase().includes(inputSearch.toLowerCase())
      );
    }
  };
  useEffect(() => {
    getData(url);
  }, []);
  return (
    <DataContext.Provider
      value={{
        beerData,
        loading,
        setBeerData,
        inputSearch,
        setInputSearch,
        filterProductsBySearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);
export { useData, DataProvider };
