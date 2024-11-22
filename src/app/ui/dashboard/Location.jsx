import Image from "next/image";

export default function Location() {
    return (
        <section className="card  ring-2 ring-slate-800 bg-base-100 max-w-md md:h-96 lg:h-auto lg:row-span-2 m-4 overflow-hidden bg-white dark:bg-gray-900">
                <figure>
                    <Image
                        width={500}
                        height={300}
                        src="/local.jpeg"
                        alt="imageIg" />
                </figure>
            <article className="flex items-start text-white text-center">
                <article className="card-body">
                    <h2 className="card-title text-gray-800 dark:text-gray-100">Ubicación del local</h2>
                    <p className="text-start text-gray-800 dark:text-gray-100">Alberti 2031 - Parque Patricios, Buenos Aires</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><a target="_blank" href="https://maps.app.goo.gl/CyysiyPupd8qPUur8">Ver mapa</a></button>
                    </div>
                </article>
            </article>
        </section>
    )
}