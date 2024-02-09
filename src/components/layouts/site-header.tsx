'use client'
import React from 'react'
import NextLink from 'next/link'
import { CallToAction } from '../call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 border-none transition-colors duration-300 bg-black/80 backdrop-filter backdrop-saturate-150 backdrop-blur-lg transition-color',
          isOnTop && 'bg-transparent',
          isMenuOpen && 'bg-transparent'
        )}
      >
        <nav className='relative' aria-label='Emah Directory'>
          <div className='container'>
            <div
              className='w-full h-16 lg:h-20 flex justify-between items-center'
            >
              <div className='h-8 lg:h-10'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logotype className='w-auto h-full fill-primary first:[&>path]:fill-accent' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-5'>
                <div className='hidden lg:flex items-center gap-x-5'>
                  <ul className='flex items-center gap-x-5'>
                    {siteNav.map((navItem, key) => (
                      <li key={key} className='last:hidden'>
                        <Link href={navItem.href} className='hidden lg:flex px-1 text-white font-semibold' variant='link'>
                          {navItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <CallToAction className='hidden lg:flex' size='default' />
                </div>
                <div className='block lg:hidden'>
                  <div className='block lg:hidden w-7 h-3 relative [&>span]:transition-all [&>span]:duration-300' onClick={toggleMenu}>
                    <span className={cn('w-full h-[3px] bg-accent absolute top-0 right-0', isMenuOpen && 'inset-0 m-auto rotate-45')} />
                    <span className={cn('w-full h-[3px] bg-accent absolute bottom-0 right-0', isMenuOpen && 'inset-0 m-auto -rotate-45')} />
                    <span className='sr-only'>Toggle menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-background/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-300',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <ul className='container mt-spacing-8'>
          {siteNav.map((navItem, key) => (
            <li key={key} className='border-b-[1.5px] first:border-t-[1.5px]'>
              <Link
                className='flex justify-between text-lg rounded-none w-full px-0 py-2.5 sm:py-2.5'
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.title}
                <Icons.ArrowRight className='w-5 h-5' />
              </Link>
            </li>
          ))}
        </ul>
        <div className='container pb-8 flex justify-between items-end'>
          <div>
            <div className='text-sm sm:text-base text-muted-foreground'>
              Correo electrónico
            </div>
            <Link className='px-0 text-lg' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
              {contactEmail}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
