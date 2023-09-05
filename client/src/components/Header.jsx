import MarcaLaRioja from "../assets/MarcaLaRioja";
import Quicho from "../assets/Quicho";
import Trivial from "../assets/Trivial";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex flex-col md:flex md:flex-row md:justify-between p-4">
      <div>
        <NavBar tamaño="small"/>
      </div>
      <div>
        <Trivial width="408" height="153" />
      </div>
    </header>
  );
};

export default Header;
