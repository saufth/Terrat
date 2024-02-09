import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: MainNavItem[] = [
  {
    title: 'Inmobiliaria',
    href: '/inmobiliaria'
  },
  {
    title: 'Desarrolladora',
    href: '/desarrolladora'
  },
  {
    title: 'Construcción',
    href: '/construccion'
  },
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Ponte en contacto',
    href: '/contacto'
  }
]

export const domain = 'grupoterrat.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Grupo Terrat',
  description: 'Inmobiliaria, desarrolladora y constructora',
  slogan: 'La construcción de tus sueños comienza aquí',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}
