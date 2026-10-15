import CarouselClients from "../components/CarouselClients"
import VideoSection from "../components/VideoSection"
import AboutSection from "../components/AboutSection"

import LazySection from "../components/LazySection"

import FeaturedVideos from "../components/FeaturedVideos"
import Footer from "../components/Footer"

import Header from "../components/Header"
import ContactSection from "../components/ContactSection"

import LoadingComponent from "@/components/LoadingComponent"
import { CarouselFeedbacks } from "@/components/CarouselFeedbacks"

import { useContext, useState } from "react"
import { LoadingContext } from "@/context/LoadingContext"

export function Home() {

  const {loaded} = useContext(LoadingContext)!

  return (
    <>
      {!loaded && <LoadingComponent />}

      <div
        className={`${
          !loaded ? "invisible h-dvh overflow-hidden" : "min-h-screen bg-black text-white"
        }`}
      >
        <Header />
        <main className="min-h-screen bg-black">
          <VideoSection />

          <LazySection>
            <AboutSection />
          </LazySection>

          <LazySection>
            <CarouselClients />
          </LazySection>

          <LazySection>
            <FeaturedVideos />
          </LazySection>

          <LazySection>
            <CarouselFeedbacks />
          </LazySection>

          <LazySection>
            <ContactSection />
          </LazySection>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
