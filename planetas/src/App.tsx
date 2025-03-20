import { useState } from "react"
import Header from "./components/Header"
import Planeta from "./components/Planeta"
import { listadoPlanetas } from "./data/data"

function App() {
  const [planeta, setPlaneta] = useState("Earth")

  const obtenerPlaneta = (e : string) => {
    setPlaneta(e)
  }

  const planetaActual = listadoPlanetas.filter(item => item.name === planeta);
  const planetaMostrar = planetaActual[0]
  
  return (
    <>
      <div className="fondo bg-black">

        <Header 
          obtenerPlaneta={obtenerPlaneta}
        />

        <Planeta 
          planetaMostrar={planetaMostrar}
        />
      </div>
    </>
  )
}

export default App
