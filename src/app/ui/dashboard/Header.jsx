import styles from '@/app/styles/background.module.css'

export default function Header() {
    return (
      <div className={styles.backgroundImage}>
      <section className="grid justify-center items-center text-center p-5 h-5/6 w-screen">
        <h1 className="text-5xl font-bold m-2">Barrio Fino Barberia</h1>
        <p className="text-2xl m-4">Somos Barrio fino. <br /> Una barberia desde el año 2020 ubicada en el barrio de Parque Patricios</p>
      </section>
      </div>
    )
  }