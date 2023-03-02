// Types
import { Language, Translatable } from '../../../types/app'

/** Node enviroment mode */
export const env = process.env.NODE_ENV

/** The base URL of the aplication */
export const baseUrl = process.env.HOST

/** The name of the organization */
export const organization = 'Grupo Terrat'

/** The head desciption of the application */
export const descriptionConfig: Translatable = {
  es: 'Impulsar a las empresas con visión, a fin de crear un legado de progreso y verdad',
  en: 'Promote companies with vision, in order to create a legacy of progress and truth'
}

/** The keyword list of the application */
export const keywordList = [
  'grupo terrat',
  'grupo inmobiliario terrat',
  'grupo inmobiliario terrat merida yucatan',
  'inmobiliaria merida yucatan',
  'bienes raices merida yucatan',
  'venta de casas meridia yucatan',
  'desarrollos inmobiliarios merida yucatan',
  'desarrollos habitacionales merida yucatan'
]

/** The keyword list as string */
export const keywords = String(keywordList)

/** Is used as a cover image for social networks */
export const coverImageUrl = `${baseUrl}cover.jpg`

/** Twitter account */
export const twitter = '@grupoterrat'

/** Google seach scheme */
export const googleSearchSchema = {
  '@context': 'https://schema.org/',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: `${organization}`
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      url: `${baseUrl}`,
      name: `${organization}`,
      publisher: {
        '@id': `${baseUrl}#organization`
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': `${baseUrl}#webpage`,
      url: `${baseUrl}`,
      name: `${organization}`,
      about: {
        '@id': `${baseUrl}#organization`
      },
      isPartOf: {
        '@id': `${baseUrl}#website`
      },
      inLanguage: 'es-MX'
    }
  ]
}

/** The initial state of the language application */
export const languageInitialState: Language = 'es'
