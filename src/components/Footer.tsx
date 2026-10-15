import InnovaIcon from "../../public/innova-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="flex items-center gap-2 justify-between border-t-2 border-zinc-800 p-4">
      <img src={InnovaIcon} alt="Innova" className="w-30 h-30" />
      <div className="flex gap-2 p-2 items-center">
        <a href="https://www.instagram.com/innovaof/" target="_blank" className="hover:scale-110 duration-300 hover:text-pink-800">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="https://www.youtube.com/@guifaxx" target="_blank" className="hover:scale-110 duration-300 hover:text-red-500">
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </a>
      </div>
    </footer>
  )
}

export default Footer