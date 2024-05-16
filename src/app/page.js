import Hero from "@/_component/Hero";
import Login from "@/_component/Login";
import ProductCollection from "@/_component/ProductCollection";
import Stat from "@/_component/Stat";



export default function Home() {
  return (
    <div>
      <Hero/>
      <Login/>
      <ProductCollection/>
      <Stat/>
    </div>
  );
}
