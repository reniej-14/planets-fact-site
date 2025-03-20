type HeaderProps = {
    obtenerPlaneta: (e: string) => void
}

export default function Header({obtenerPlaneta} : HeaderProps) {
  return (
    <header className="border-b border-[#38384F]">
        <div className="text-white flex flex-col md:flex-row md:justify-between py-4 px-10 uppercase">
            <p className="font-bold text-2xl font-antonio">The Planets</p>
            <nav className="flex flex-wrap gap-4 justify-center items-center md:gap-8 text-xs gris font-bold font-spartan pt-6 md:pt-1">
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Mercury
                </p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Venus</p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Earth</p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Mars</p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Jupiter</p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Saturn</p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Uranus</p>
                <p className="hover:text-white hover:cursor-pointer"
                    onClick={(e) => obtenerPlaneta(e.currentTarget.textContent || '')}
                >Neptune</p>
            </nav>
        </div>
    </header>
  )
}
