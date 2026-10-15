import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import feedback1 from "@/assets/feedbacks/feedback_1.jpeg"
import feedback2 from "@/assets/feedbacks/feedback_2.jpeg"
import feedback3 from "@/assets/feedbacks/feedback_3.jpeg"
import feedback4 from "@/assets/feedbacks/feedback_4.jpeg"
import feedback5 from "@/assets/feedbacks/feedback_5.jpeg"
import feedback6 from "@/assets/feedbacks/feedback_6.jpeg"

import { MessageSquareQuote } from "lucide-react"

const feedbacks = [
  feedback1,
  feedback2,
  feedback3,
  feedback4,
  feedback5,
  feedback6,
]

export function CarouselFeedbacks() {
  return (
    <section className="flex w-full justify-center items-center px-4 py-8 animate-has-show flex-col" id="feedbacks">
      <div className="flex text-xl sm:text-2xl font-bold tracking-widest uppercase gap-2 items-center">
        <MessageSquareQuote size={24} />
        <h4>Feedbacks</h4>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent>
          {feedbacks.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card className="overflow-hidden border-0 bg-transparent shadow-md">
                  <CardContent className="flex items-center justify-center p-0">
                    <img
                      src={image}
                      alt={`Feedback de cliente ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full rounded-lg object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-2 sm:-left-4 text-black" />
        <CarouselNext className="-right-2 sm:-right-4 text-black" />
      </Carousel>
    </section>
  )
}

export default CarouselFeedbacks
