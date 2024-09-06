import Header from "@/app/ui/dashboard/Header"
import Services from "./ui/dashboard/Services"
export default function Home() {
  return (
    <>
    <main className="lg:flex flex-col items-center text-center">
    <Header />
    <Services />
    </main>
    </>
  )
}
