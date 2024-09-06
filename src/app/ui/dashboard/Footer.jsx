import Image from "next/image"
export default function Footer() {
  return (
    

<footer>
    <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <article className="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.jpeg" className="h-8" alt="Logobarber" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Barrio Fino</span>
            </a>
           
        </article>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://sebastiang.netlify.app/" class="hover:underline">DraCode</a>. All Rights Reserved.</span>
    </section>
</footer>
  )
}