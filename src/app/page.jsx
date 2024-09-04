import Information from "./ui/dashboard/Information"
import Footer from "./ui/dashboard/Footer"
import Services from "./ui/dashboard/Services"

export default function Home() {
  return (
    <>
    <main className="lg:flex flex-col items-center text-center p-5">
    <Information />
    <Services />
    <Footer />
    </main>
    </>
  )
}
