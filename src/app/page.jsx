import Header from "@/app/ui/dashboard/Header"
import Services from "./ui/dashboard/Services"
import Footer from "./ui/dashboard/Footer"
import ImageGallery from "./ui/dashboard/ImageGallery"
import Location from "./ui/dashboard/Location"
import Hours from "./ui/dashboard/Hours"
import Contact from "./ui/dashboard/Contac"
export default function Home() {
  return (
    <>
      <main
        className="w-full flex flex-col justify-center items-center gap-4">
        <Header />
        <ImageGallery />
        <Hours />
        <Services />
        <article className="lg:flex lg:gap-4">
          <Location />
          <Contact />
        </article>
      </main>
      <Footer />
    </>
  )
}
