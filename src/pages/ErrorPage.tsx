import InnovaIcon from "../../public/innova-icon.png"
import NotFoundImage from "../assets/icons/404_image.png"

import { useNavigate } from "react-router-dom"

import { ArrowUpRight } from "lucide-react"
import { CornerDownLeft } from "lucide-react"

function ErrorPage() {

  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <header className="absolute top-0 flex items-center justify-center bg-black/70 z-50 w-full animate-has-show">
        <nav className="w-full justify-around items-center flex">
          <img src={InnovaIcon} className="size-30" />
          <div className="flex items-center">
            <div className="h-1 w-1 bg-white rounded-full mr-2" />
            <p className="text-gray-300 text-sm italic">Página não encontrada</p>
          </div>
        </nav>
      </header>
      <main className="flex justify-center items-center flex-col animate-has-show p-2 text-center">
        <img src={NotFoundImage} className="w-100 mb-4" />
        <p className="uppercase text-gray-500 text-sm mb-8">fora de cena</p>
        <h1 className="text-3xl mb-4">Esta página saiu de cena.</h1>
        <p className="text-sm text-gray-500 font-semibold">
          O endereço pode ter mudado ou não existir mais. Mas a sua história continua por aqui.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black p-2 rounded-sm flex items-center cursor-pointer duration-300 hover:scale-103" onClick={() => navigate("/")}>Ir para o início <ArrowUpRight /> </button>
          <button className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm cursor-pointer duration-300 hover:scale-103" onClick={() => navigate(-1)}><CornerDownLeft/> Voltar</button>
        </div>
      </main>
    </div>
  )
}

export default ErrorPage
