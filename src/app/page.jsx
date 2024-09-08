import Header from "@/app/ui/dashboard/Header"
import Services from "./ui/dashboard/Services"
import Footer from "./ui/dashboard/Footer"
import ImageGallery from "./ui/dashboard/ImageGallery"

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <ImageGallery />
        <Services />
        <Footer />
      </main>
    </>
  )
}
