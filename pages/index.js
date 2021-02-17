import HomeCard from '../components/HomeCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className="flex lg:items-center flex-wrap lg:justify-center lg:mt-40 lg:mt-99 mt-24 max-w-6xl">     
        <HomeCard cardName="Solicitudes de creación de empresas" icon="industry" message="2 solicitudes sin tratar"/>
        <HomeCard cardName="Indicadores" icon="chart-bar" message="Visitado por última vez: 31/01/2020" />
        <HomeCard cardName="Inscripción de empleados en empresas" icon="user-tie" message="3 usuarios sin empresa registrada"/>
        <HomeCard cardName="Gestión de usuarios" icon="users-cog" message="532 usuarios activos en la plataforma" />
      </div>
      
    </div>
  )
}
