import { type Metadata } from 'next'
import BackgroundVideo from '@/components/background-video'
import { CallToAbout, CallToAction } from '@/components/call-to-action'
import { siteConfig } from '@/config/site'
import { services } from '@/config/services'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Desarrolladora',
  description: siteConfig.description
}

const InmobiliariaData = services.find((service) => service.slug === '/inmobiliaria')!

export default function DesarrolladoraPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[65px] lg:-mt-[81px] flex flex-col justify-center'>
          <div className='container relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='mx-auto f-display-1 font-header max-w-[322px] xs:max-w-none text-white'>
                {InmobiliariaData.title}
              </h1>
              <p className='f-subhead-1 font-medium mt-spacing-4 text-white'>
                {InmobiliariaData.description}
              </p>
              <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
                <CallToAction />
                <CallToAbout />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/desarrolladora-hero.mp4' />
        </div>
      </section>
    </>
  )
}
