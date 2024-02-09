import Image from 'next/image'
import { type Metadata } from 'next'
import Background from '@/components/background'
import BackgroundVideo from '@/components/background-video'
import { CallToAbout, CallToAction } from '@/components/call-to-action'
import { InfoCard } from '@/components/cards/info-card'
import { siteConfig } from '@/config/site'
import { services } from '@/config/services'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Inmobiliaria',
  description: siteConfig.description
}

const inmobiliaria = services.find((service) => service.slug === '/inmobiliaria')

export default function InmobiliariaPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[65px] lg:-mt-[81px] flex flex-col justify-center bg-secondary'>
          <div className='container relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              {inmobiliaria && (
                <>
                  <h1 className='mx-auto f-display-1 font-header max-w-[322px] xs:max-w-none text-white'>
                    {inmobiliaria.title}
                  </h1>
                  <p className='f-subhead-1 font-medium mt-spacing-4 text-white'>
                    {inmobiliaria.description}
                  </p>
                </>
              )}
              <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
                <CallToAction />
                <CallToAbout />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/inmobiliaria-hero.mp4' />
        </div>
      </section>
      <Background>
        {inmobiliaria?.items.map((inmobiliariaItem, key) => (
          <section className='container py-spacing-5' key={key}>
            <div className='relative bg-secondary'>
              {inmobiliariaItem.image && (
                <Image
                  src={inmobiliariaItem.image.src}
                  alt={inmobiliariaItem.image.alt}
                  width={inmobiliariaItem.image.width}
                  height={inmobiliariaItem.image.height}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              )}
              <div className='absolute inset-0 m-auto grid place-content-center bg-black/30 text-center px-4'>
                <div className='max-w-3xl mx-auto'>
                  <h2 className='f-display-3 font-header text-white'>
                    {inmobiliariaItem.title}
                  </h2>
                  {inmobiliariaItem.description && (
                    <p className='f-subhead-1 font-medium mt-spacing-4 text-white text-balance'>
                      {inmobiliariaItem.description}
                    </p>
                  )}
                  <div className='flex justify-center mt-spacing-4'>
                    <CallToAction />
                  </div>
                </div>
              </div>
            </div>
            <div className='cols-container gap-y-gutter mt-gutter'>
              {inmobiliariaItem.items?.map((item, key) => (
                <InfoCard className='w-6-cols sm:w-8-cols lg:w-4-cols' card={item} key={key} />
              ))}
            </div>
          </section>
        ))}
      </Background>
    </>
  )
}
