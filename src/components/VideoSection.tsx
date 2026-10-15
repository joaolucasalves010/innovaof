import InnovaVideo from "../assets/videos/Innova.mp4"
import { useContext} from "react"

import { LoadingContext } from "@/context/LoadingContext"

const VideoSection = () => {

  const {setLoaded} = useContext(LoadingContext)!

  return (
    <section className="relative -mt-[200px] md:-mt-[120px] h-[650px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-[580px] object-cover"
        src={InnovaVideo}
        onLoadedData={() => {
            setLoaded(true)
          console.log("vídeo carregado")
        }}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  )
}

export default VideoSection