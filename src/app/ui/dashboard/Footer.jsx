export default function Footer() {
  return (
<footer>
    <section className="w-full mt-2 max-w-screen-xl mx-auto p-4 md:py-8">
        <article className="sm:flex sm:items-center sm:justify-around">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.jpeg" className="h-8" alt="Logobarber" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-gray-100">Barrio Fino</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-800 dark:text-gray-100">
                <li>
                    <a target="_blank" href="https://www.instagram.com/barriofino_barberia?igsh=N3Jmc3JxNmRyODF3" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.me/+5491123835826?text=Hola-tengo-una-consulta" className="hover:underline me-4 md:me-6">Whatsapp</a>
                </li>
            </ul>   
        </article>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-800 dark:text-gray-100">© 2024 <a target="_blank" href="https://sebastiang.netlify.app/" className="hover:underline text-gray-800 dark:text-gray-100">DraCode</a>. All Rights Reserved.</span>
    </section>
</footer>
  )
}