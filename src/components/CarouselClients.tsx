"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import client1 from "@/assets/clients/1.png"
import client2 from "@/assets/clients/2.png"
import client3 from "@/assets/clients/3.png"
import client4 from "@/assets/clients/4.png"
import client5 from "@/assets/clients/5.png"
import client6 from "@/assets/clients/6.png"
import client7 from "@/assets/clients/7.png"
import client8 from "@/assets/clients/8.png"
import client9 from "@/assets/clients/9.png"
import client10 from "@/assets/clients/10.png"
import client11 from "@/assets/clients/11.png"

const clients = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10, client11
]

export default function CarouselClients() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )

  return (
    <section className="flex justify-center items-center flex-col gap-8 py-12 px-4 animate-has-show mt-10 scroll-mt-60" id="clients">

      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-widest uppercase">
          Marcas que fazem parte da nossa história
        </h2>
        <div className="w-12 h-1 rounded-full bg-primary mt-1" />
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          {clients.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div className="p-2">
                <Card className="bg-black">
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <img
                      src={src}
                      alt={`Cliente ${index + 1}`}
                      className="object-contain w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </section>
  )
}