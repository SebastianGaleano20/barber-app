import Information from "./ui/dashboard/Information"
import Footer from "./ui/dashboard/Footer"

export default function Home() {
  return (
    <>
    <main className="lg:flex flex-col justify-center items-center text-center p-5">
    <Information />
    <Footer />
    </main>
    </>
  )
}
