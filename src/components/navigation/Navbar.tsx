// Components
import Image from 'next/image'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/MenuButton'
// React
import { useEffect, useState } from 'react'
// Next
import { useRouter } from 'next/router'
// Animation
import { useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
// Config
import { navigationConfig } from '../../modules/navigation/config'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  // Scroll animation
  const { asPath } = useRouter()
  const isHomePage = asPath === '/'
  const [isScrolled, setIsScrolled] = useState(!isHomePage)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    if (isHomePage) setIsScrolled(latestScrollY > 1)
  })
  const navbarStyle = `${styles.navbar} ${isScrolled ? styles.navbarBackhround : ''}`
  useEffect(() => {
    setIsScrolled(!isHomePage)
  }, [isHomePage])
  // Menu animation
  const [isOpen, toggle] = useCycle(false, true)
  const handleToggle = () => {
    toggle()
    setIsScrolled(true)
  }
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className={navbarStyle}>
        <div className={styles.content}>
          <NextLink href={navigationConfig[0].href} onClick={closeToggle}>
            <Image
              src='/images/logo.svg'
              alt='Sauftdev logotype'
              width={64}
              height={64}
              priority
              className={styles.logo}
            />
          </NextLink>

          {isOpen
            ? <div className={styles.close} onClick={handleToggle}>X</div>
            : <MenuButton action={handleToggle} />}
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}

export default Navbar
