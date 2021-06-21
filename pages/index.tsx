import styles from '../styles/Home.module.scss'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <MainLayout title='Главная'>
        Hello World
      </MainLayout>
    </div>
  )
}
