export default function Footer() {
  return (
<footer>
    <section className="w-full max-w-screen-xl mx-auto md:py-8">
        <article className="sm:flex sm:items-center sm:justify-around">
            <a href="#" className="flex items-center  sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.jpeg" className="h-8" alt="Logobarber" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Barrio Fino</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a target="_blank" href="https://www.instagram.com/barriofino_barberia?igsh=N3Jmc3JxNmRyODF3" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.me/+5491123835826?text=Hola-tengo-una-consulta" className="hover:underline me-4 md:me-6">Whatsapp</a>
                </li>
            </ul>   
        </article>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a target="_blank" href="https://sebastiang.netlify.app/" className="hover:underline">DraCode</a>. All Rights Reserved.</span>
    </section>
</footer>
  )
}