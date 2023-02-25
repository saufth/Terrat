// Components
import Image from 'next/image'
import Link from 'next/link'
// React
import { MouseEvent } from 'react'
// Styles
import styles from '../../styles/sections/Hero.module.css'

/**
* The home page hero section component
* @returns The Hero component
*/
const Hero = () => {
  const preventContextMenu = (event: MouseEvent) => event.preventDefault()

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Image
          src='/images/logo.png'
          alt='Grupo Terrat logotype'
          width={164}
          height={164}
        />
        <p className={styles.message}>
          Próximamente
        </p>
        <Link
          href='mailto:contacto@grupoterrat.com'
          className={styles.link}
        >
          <p>
            contacto@grupoterrat.com
          </p>
        </Link>
      </div>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          width={1920}
          height={1080}
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList='nodownload noplaybackrate'
          onContextMenu={preventContextMenu}
        >
          <source src='/video/hero.mp4' type='video/mp4' />
        </video>
      </div>
      <div className={styles.filter} />
    </section>
  )
}

export default Hero
