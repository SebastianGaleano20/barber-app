import Header from "@/app/ui/dashboard/Header"
import Services from "./ui/dashboard/Services"
import Footer from "./ui/dashboard/Footer"

export default function Home() {
  return (
    <>
      <main className="text-center">
        <Header />
        <Services />
        <Footer />
      </main>
    </>
  )
}
