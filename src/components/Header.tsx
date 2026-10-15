import InnovaIcon from "../../public/innova-icon.png"
import { ExternalLinkIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 text-white">
      <nav className="hidden w-full justify-around md:flex lg:flex">
        <img
          src={InnovaIcon}
          alt="Innova"
          className="animate-has-show size-30"
        />
        <ul className="animate-has-show flex items-center gap-4 tracking-widest uppercase">
          <li>
            <a href="#about" className="flex duration-300 hover:scale-105">
              Sobre
            </a>
          </li>
          <li>
            <a href="#clients" className="flex duration-300 hover:scale-105">
              Clientes
            </a>
          </li>
          <li>
            <a href="#videos" className="flex duration-300 hover:scale-105">
              Vídeos
            </a>
          </li>
          <li>
            <a href="#feedbacks">Feedbacks</a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-white p-2 duration-300 hover:scale-105"
            >
              <ExternalLinkIcon /> Contato
            </a>
          </li>
        </ul>
      </nav>

      <div className="animate-has-show flex items-center justify-between px-4 py-2 md:hidden">
        <img src={InnovaIcon} className="h-30 w-30" />
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-white">
              <MenuIcon size={28} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 border-white/10 bg-black/95 text-white [&>button]:hidden"
          >
            <ul className="mt-12 flex flex-col gap-6 px-4 tracking-widest uppercase">
              <li>
                <a href="#about" className="duration-300 hover:opacity-70">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#videos" className="duration-300 hover:opacity-70">
                  Videos
                </a>
              </li>
              <li>
                <a href="#clients" className="duration-300 hover:opacity-70">
                  Nossos Clientes
                </a>
              </li>
              <li>
                <a href="#feedbacks">Feedbacks</a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-lg border border-white p-2 duration-300 hover:opacity-70"
                >
                  <ExternalLinkIcon size={16} /> Contato
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
