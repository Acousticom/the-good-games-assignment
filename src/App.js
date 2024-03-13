import "./App.css";
import { useData } from "./context/DataContext";
import ProductsCard from "./components/ProductsCard";
import ShimmerCard from "./components/ShimmerCard";
import Navbar from "./components/Navbar";
function App() {
  const {loading,filterProductsBySearch } = useData();
  const filteredProducts=filterProductsBySearch()
  return (
    <div className="">
        <Navbar />
      <div className="flex flex-wrap justify-center gap-4 mt-24">
        {loading && [...Array(8)].map((arr) => <ShimmerCard />)}
        {filteredProducts?.length>0?filteredProducts?.map((data) => (
          <ProductsCard data={data} key={data.id} />
        )):<h1 className="text-2xl font-bold">Not found</h1>}
      </div>
    </div>
  );
}

export default App;
