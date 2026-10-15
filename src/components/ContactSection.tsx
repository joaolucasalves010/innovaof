import { Contact} from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import avatar from "../assets/icons/avatar/avatar.jpeg"

const ContactSection = () => {
  return (
    <section className='flex justify-center items-center flex-col my-5 animate-has-show p-2 scroll-mt-20' id="contact" >
      <div className="max-w-xl">
        <div className="flex items-center gap-2 p-2 justify-center">
          <Contact size={35}/>
          <h2 className='text-xl lg:text-2xl md:text-2xl font-semibold tracking-widest uppercase'>Fale Conosco</h2>
        </div>
        <div className="flex flex-col justify-center items-center border border-zinc-700 p-4 my-5 rounded-lg">
          <div className="relative">
            <img src={avatar} alt="" className="rounded-full w-20"/>
            <div className="absolute h-4 w-4 bg-green-500 rounded-full top-1 right-0"/>
            <div className="absolute h-4 w-4 bg-green-500 rounded-full top-1 right-0 animate-ping"/>            
          </div>
          <p className="text-center my-2 font-semibold md:text-lg lg:text-lg">Vamos criar algo incrível juntos?</p>
          <p className="text-center mb-6 text-sm text-zinc-200">Se você deseja eternizar um momento tão especial com qualidade e sensibilidade, entre em contato com a gente e transforme seu próximo evento em uma memória inesquecível.</p>
          <a href="https://api.whatsapp.com/send/?phone=7799612705&text=Ol%C3%A1%2C%20tudo%20bem%3F%0AVi%20um%20pouco%20do%20seu%20trabalho%20no%20site%20da%20Innova%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.&type=phone_number&app_absent=0" target="_blank" className="bg-green-500 text-white font-semibold p-2 w-60 lg:w-90 md:w-90 rounded-sm flex items-center justify-center hover:scale-105 hover:opacity-80 cursor-pointer duration-300"><FontAwesomeIcon icon={faWhatsapp} className="text-2xl" /> Entrar em contato</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection