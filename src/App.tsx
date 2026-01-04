import "./App.css";
import DesktopImg from "./assets/image-product-desktop.jpg";
import MobileImg from "./assets/image-product-mobile.jpg";
import AddToCardBtn from "./components/AddToCardBtn";

function App() {
  return (
    <div className="flex h-screen justify-center items-center bg-orange-100">
      <div className="flex flex-col w-[400px] h-auto shadow-2xl  md:flex-row md:w-[500px] md:h-[400px]">
        <img
          src={DesktopImg}
          alt="Purfume with leaf"
          className="object-cover w-[50%] h-100 rounded-l-xl hidden md:block"
        />

        <img src={MobileImg} alt="Purfume with leaf" className="block object-cover md:hidden h-90 " />

        <div className="flex flex-col bg-white w-full md:w-[50%] p-5 rounded-r-xl">
          <h3 className=" font-mono tracking-widest text-gray-400">PERFUME</h3>
          <h1 className="font-mono text-3xl font-bold">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-gray-400 mt-3 text-[14px]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row items-center font-mono mt-4 mb-8">
            <span className=" text-2xl text-green-700">$149.99</span>
            <span className=" text-gray-400 text-[15px] line-through ml-4">
              $169.99
            </span>
          </div>
          <AddToCardBtn bgColor={"teal-600"}>Add to Cart</AddToCardBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
