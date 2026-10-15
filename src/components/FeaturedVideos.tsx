
import { Video } from "lucide-react"

const FeaturedVideos = () => {
  const videos = [
    "https://www.youtube.com/embed/eRvRDedL0j0?si=FL18C4dJtazJ89v_",
    "https://www.youtube.com/embed/P-Igdh3tyxA?si=2NqpExwqj_nxbA3s",
    "https://www.youtube.com/embed/9LKDd5el4RQ?si=Jgr5h8zBTZwMHyt_",
    "https://www.youtube.com/embed/VmngW0eJGgQ?si=Q84pW7xxDucn4UPJ",
    "https://youtube.com/embed/7ekWR093_Bk?si=L0GZvTMlpEBo-xTF",
    "https://youtube.com/embed/sjGs1aOv1Co?si=daG8x3WOIXhxOCtV",
  ]

  return (
    <section
      className="animate-has-show flex flex-col items-center justify-center scroll-mt-50"
      id="videos"
    >
      <div className="flex items-center gap-2">
        <Video size={35} />
        <h3 className="text-xl font-semibold tracking-widest uppercase md:text-2xl">
          nossos vídeos
        </h3>
      </div>

      <div className="my-10 grid w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {videos.map((video, index) => (
          <div key={index} className="w-full min-w-0">
            <iframe
              className="aspect-video w-full rounded-md"
              src={`${video}&modestbranding=1&rel=0&controls=1&fs=1&iv_load_policy=3&disablekb=1&playsinline=1`}
              title={`Vídeo ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedVideos