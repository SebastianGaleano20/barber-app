import Header from "@/app/ui/dashboard/Header"
import Services from "./ui/dashboard/Services"
import Footer from "./ui/dashboard/Footer"
import ImageGallery from "./ui/dashboard/ImageGallery"
import Location from "./ui/dashboard/Location"
import Hours from "./ui/dashboard/Hours"
import Contact from "./ui/dashboard/Contac"
import ImageGalleryLg from "./ui/dashboard/ImageGalleryLg"
import Barbers from "./ui/dashboard/Barbers"

export default function Home() {
  return (
    <>
      <main
        className="w-full flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Header />
        <ImageGallery />
        <ImageGalleryLg />
        <Services />
        <Barbers />
        <article className="w-full grid justify-center gap-4 md:h-auto  md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2">
          <Location />
          <Contact />
          <Hours />
        </article>
      <Footer />
      </main>
    </>
  )
}
