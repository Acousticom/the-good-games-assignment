import "./App.css";
import { useData } from "./context/DataContext";
import ProductsCard from "./components/ProductsCard";
import ShimmerCard from "./components/ShimmerCard";
import Navbar from "./components/Navbar";
function App() {
  const {loading,filterProductsBySearch,inputSearch } = useData();
  const filteredProducts=filterProductsBySearch()
  return (
    <div className="">
        <Navbar />
      <div className="flex flex-wrap justify-center gap-4 mt-32 md:mt-24">
        {loading && [...Array(8)].map((arr) => <ShimmerCard />)}
        {filteredProducts?.map((data) => (
          <ProductsCard data={data} key={data.id} />
        ))}
        {(filteredProducts?.length===0&&inputSearch?.length>0)?(<h1 className="text-2xl font-bold">Not found</h1>):null}

      </div>
    </div>
  );
}

export default App;
