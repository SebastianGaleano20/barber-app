export default function Location() {
    return (
        <section className="flex justify-center p-4 lg">
            <article className="card glass max-w-md">
                <figure>
                    <img
                        src="/ubi.jpeg"
                        alt="Ubicacion"
                        className="w-full"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ubicación del local</h2>
                    <p>Alberti 2031 - Parque Patricios, Buenos Aires</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank" href="https://maps.app.goo.gl/CyysiyPupd8qPUur8">Ver mapa</a></button>
                    </div>
                </div>
            </article>
        </section>
    )
}