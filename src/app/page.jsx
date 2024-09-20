import Header from "@/app/ui/dashboard/Header"
import Services from "./ui/dashboard/Services"
import Footer from "./ui/dashboard/Footer"
import ImageGallery from "./ui/dashboard/ImageGallery"
import Location from "./ui/dashboard/Location"

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <ImageGallery />
        <Services />
        <Location />
        <Footer />
      </main>
    </>
  )
}
