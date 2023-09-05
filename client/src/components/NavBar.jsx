import { Link } from "react-router-dom"
import MarcaLaRioja from "../assets/MarcaLaRioja"

const NavBar = ({tamaño}) => {

  let width = ""
  let height = ""

  if (tamaño === "small") {
    width = "125"
    height = "30"
  }

  return (
    <nav className="flex justify-center">
        <Link to={"/"} ><MarcaLaRioja color="333333" width={width} height={height}/></Link>
    </nav>
  )
}

export default NavBar