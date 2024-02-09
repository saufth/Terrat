import Image from 'next/image'
import BackgroundVideo from '@/components/background-video'
import { CallToAction, CallToAbout } from '@/components/call-to-action'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'
import { Link } from '@/components/ui/link'
import { Icons } from '@/components/icons'
import Background from '@/components/background'

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[65px] lg:-mt-[81px] flex flex-col justify-center bg-secondary'>
          <div className='container relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='mx-auto f-display-1 font-header max-w-[322px] xs:max-w-none text-white'>
                {siteConfig.slogan}
              </h1>
              <p className='f-subhead-1 font-medium mt-spacing-4 text-white'>
                {siteConfig.description}.
              </p>
              <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
                <CallToAction />
                <CallToAbout />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/home-hero.mp4' />
        </div>
      </section>
      <Background>
        <section className='py-spacing-7 overflow-hidden'>
          <div className='container-sm'>
            <div>
              <h2 className='f-display-3 font-header md:pr-9 lg:pr-11 text-center'>
                Nuestros servicios
              </h2>
            </div>
            <div className='space-y-16 md:space-y-24 mt-spacing-6'>
              {services.map((serviceItem, key) => (
                <div className='cols-container items-center mt-spacing-3 even:flex-row-reverse' key={key}>
                  <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols mt-5 md:mt-0 order-2'>
                    <div className='sm:max-w-lg'>
                      <h3 className='f-heading-1 font-header'>
                        {serviceItem.title}
                      </h3>
                      {serviceItem.description && (
                        <p className='f-subhead-2 mt-spacing-3'>
                          {serviceItem.description}
                        </p>
                      )}
                      <div className='mt-spacing-4'>
                        {serviceItem.slug && (
                          <Link
                            className='font-medium flex gap-x-2 rounded-none'
                            href={serviceItem.slug}
                            variant='default'
                            size='full'
                          >
                            Conocer más
                            <Icons.ArrowRight className='w-auto h-5 sm:h-6' />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-7-cols bg-secondary order-1'>
                    {serviceItem.image && (
                      <Image
                        src={serviceItem.image.src}
                        alt={serviceItem.image.alt}
                        width={serviceItem.image.width}
                        height={serviceItem.image.height}
                        sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                        loading='lazy'
                        className='w-full'
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Background>
    </>
  )
}
