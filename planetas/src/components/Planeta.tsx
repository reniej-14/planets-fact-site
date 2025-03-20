import { useEffect, useState } from "react";

type PlanetaProps = {
    planetaMostrar: {
        name: string;
        overview: {
            content: string;
            source: string;
        };
        structure: {
            content: string;
            source: string;
        };
        geology: {
            content: string;
            source: string;
        };
        rotation: string;
        revolution: string;
        radius: string;
        temperature: string;
        images: {
            planet: string;
            internal: string;
            geology: string;
        };
    }
}

export default function Planeta({planetaMostrar} : PlanetaProps) {
    const planetaImg = planetaMostrar.name.toLowerCase();
    const planetaRuta = `planet-${planetaImg}.svg`;
    const planetaGeologia = `geology-${planetaImg}.png`;

    const [planetaImagen, setPlanetaImagen] = useState(planetaRuta)
    const [seleccionado, setSeleccionado] = useState(1)
    const [color, setColor] = useState('bg-[#6D2ED5]')
    const [geology, setGeology] = useState(false)

    // Evaluar planeta para determinar su color
    useEffect(() => {
        if (planetaImg === 'earth') {
            setColor('bg-[#6D2ED5]')
        } else if (planetaImg === 'mars') {
            setColor('bg-[#D14C32]')
        } else if (planetaImg === 'venus') {
            setColor('bg-[#EDA249]')
        } else if (planetaImg === 'mercury') {
            setColor('bg-[#419EBB]')
        } else if (planetaImg === 'jupiter') {
            setColor('bg-[#D83A34]')
        } else if (planetaImg === 'saturn') {
            setColor('bg-[#CD5120]')
        } else if (planetaImg === 'uranus') {
            setColor('bg-[#1EC1A2]')
        } else if (planetaImg === 'neptune') {
            setColor('bg-[#2D68F0]')
        }
    }, [planetaImg])

    useEffect(() => {
        setPlanetaImagen(planetaRuta)
    }, [planetaRuta])

    const planetaOverview = () => {
        setPlanetaImagen(planetaRuta)
        setSeleccionado(1)
        setGeology(false)
    }

    const planetaStructure = () => {
        const structure = `planet-${planetaImg}-internal.svg`;
        setPlanetaImagen(structure)
        setSeleccionado(2)
        setGeology(false)
    }

    const planetaGeology = () => {
        setSeleccionado(3)
        setGeology(true)
    }


  return (
    <>
        <main className="text-white max-w-7xl mx-auto">
            <div className="pt-22 grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="max-w-[173px] md:max-w-110 mx-auto relative">
                    <img src={planetaImagen} alt="imagen planeta" />
                    {
                        geology && (
                            <img 
                                src={planetaGeologia} 
                                alt="imagen geology planeta" 
                                className="absolute bottom-[-30px] md:bottom-[-58px] left-1/2 transform -translate-x-1/2 w-[80px] md:w-[163px]"
                            />
                        )
                    }
                </div>
                
                <section className="mx-auto">
                    <div className="text-center md:text-left">
                        <h1 
                            className="text-[40px] font-medium font-antonio uppercase pt-10 md:pt-0 md:text-[80px]"
                        >
                            {planetaMostrar.name}
                        </h1>
                        <p 
                            className="font-spartan text-[14px] gris max-w-78 my-4"
                        >
                            {planetaMostrar.overview.content}
                        </p>
                        <p 
                            className="font-spartan text-[14px] gris max-w-78 my-4"
                        >
                            Source:{' '}
                            <span className="font-bold border-b hover:cursor-pointer">Wikipedia</span>
                        </p>
                    </div>

                    <div className="my-7 uppercase font-spartan text-[14px] font-medium tracking-[2.57px]">
                        <p 
                            className={`my-4 py-3 border hover:cursor-pointer ${seleccionado == 1 ? color : ''} ${seleccionado !== 1 ? 'hover:bg-[#38384F]' : ''}`}
                            onClick={planetaOverview}
                            >
                            <span className="mx-8 gris">01</span>
                            Overview
                        </p>
                        <p 
                            className={`my-4 py-3 border hover:cursor-pointer ${seleccionado == 2 ? color : ''} ${seleccionado !== 2 ? 'hover:bg-[#38384F]' : ''}`}
                            onClick={planetaStructure}
                            >
                            <span className="mx-8 gris">02</span>
                            Internal Structure
                        </p>
                        <p 
                            className={`my-4 py-3 border hover:cursor-pointer ${seleccionado == 3 ? color : ''} ${seleccionado !== 3 ? 'hover:bg-[#38384F]' : ''}`}
                            onClick={planetaGeology}
                        >
                            <span className="mx-8 gris">03</span>
                            Surface Geology
                        </p>
                    </div>
                </section>
            </div>

            <section className="uppercase grid grid-cols-1 md:grid-cols-4 mt-15 gap-5 max-w-78 mx-auto md:mx-0 md:max-w-[1120px]">
                <div className="border flex flex-row justify-between items-center md:flex-col p-5 pr-12">
                    <p 
                        className="font-spartan text-[11px] gris tracking-[1px] font-bold"
                    >
                        Rotation Time
                    </p>
                    <p 
                        className="text-[20px] md:text-[40px] font-antonio font-medium tracking-[-1.5px]"
                    >
                        {planetaMostrar.rotation}
                    </p>
                </div>
                <div className="border flex flex-row justify-between items-center md:flex-col p-5 pr-12">
                    <p 
                        className="font-spartan text-[11px] gris tracking-[1px] font-bold"
                    >
                        Revolution Time
                    </p>
                    <p 
                        className="text-[20px] md:text-[40px] font-antonio font-medium tracking-[-1.5px]"
                    >
                        {planetaMostrar.revolution}
                    </p>
                </div>
                <div className="border flex flex-row justify-between items-center md:flex-col p-5 pr-12">
                    <p 
                        className="font-spartan text-[11px] gris tracking-[1px] font-bold"
                    >
                        Radius
                    </p>
                    <p 
                        className="text-[20px] md:text-[40px] font-antonio font-medium tracking-[-1.5px]"
                    >
                        {planetaMostrar.radius}
                    </p>
                </div>
                <div className="border flex flex-row justify-between items-center md:flex-col p-5 pr-12 mb-5 md:mb-0">
                    <p 
                        className="font-spartan text-[11px] gris tracking-[1px] font-bold"
                    >
                        Average Temp.
                    </p>
                    <p 
                        className="text-[20px] md:text-[40px] font-antonio font-medium tracking-[-1.5px]"
                    >
                        {planetaMostrar.temperature}
                    </p>
                </div>
            </section>
        </main>
    </>
  )
}
