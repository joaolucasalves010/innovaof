import InnovaIcon from "../../public/innova-icon.png"

function LoadingComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <header className="animate-has-show absolute top-0 flex w-full items-center justify-center">
        <nav className="flex w-full items-center justify-around">
          <img src={InnovaIcon} className="size-30" />
          <div className="flex items-center">
            <div className="mr-2 h-1 w-1 rounded-full bg-white" />
            <p className="text-sm text-gray-300 italic">
              Em cena em instantes.
            </p>
          </div>
        </nav>
      </header>
      <main className="animate-has-show flex min-h-screen flex-col items-center justify-center">
        <div className="max-w-4xl px-4 text-center">
          <h2 className="text-base leading-relaxed font-semibold tracking-widest text-gray-300 uppercase sm:text-lg md:text-xl lg:text-2xl">
            Toda história merece ser eternizada.
          </h2>

          <p className="mt-2 text-xs leading-relaxed tracking-wider text-gray-500 uppercase sm:text-sm md:text-base">
            Porque crescer faz parte. Poder reviver é um privilégio.
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoadingComponent
