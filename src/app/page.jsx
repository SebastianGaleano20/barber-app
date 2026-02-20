import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ImageGallery from "@/components/sections/gallery/ImageGallery"
import ImageGalleryDesktop from "@/components/sections/gallery/ImageGalleryDesktop"
import Services from "@/components/sections/services/Services"
import Barbers from "@/components/sections/barbers/Barbers"
import Location from "@/components/sections/info/Location"
import Contact from "@/components/sections/info/Contact"
import Hours from "@/components/sections/info/Hours"

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-gray-50 dark:bg-dark text-gray-800 dark:text-gray-100">
        <Header />
        <ImageGallery />
        <ImageGalleryDesktop />
        <Services />
        <Barbers />
        <article className="w-full grid gap-6 px-4 md:px-8 lg:px-12 pb-10 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto">
          <Location />
          <Contact />
          <Hours />
        </article>
        <Footer />
      </main>
    </>
  )
}
