import { type Metadata } from 'next'
import BackgroundVideo from '@/components/background-video'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { InfoCard } from '@/components/cards/info-card'
import { values, history } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Nosotros',
  description: siteConfig.description
}

export default function AboutPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[65px] lg:-mt-[81px] flex flex-col justify-center'>
          <div className='container relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='mx-auto f-display-1 font-header max-w-[322px] xs:max-w-none text-white'>
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p className='f-subhead-1 font-medium mt-spacing-4 text-white text-balance'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit amet consectetur.
              </p>
              <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
                <CallToAction />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/about-hero.mp4' />
        </div>
      </section>
      <div className='relative z-20 overflow-hidden'>
        <section className='container-sm pt-spacing-7'>
          <div className='text-center'>
            <h2>
              <span className='f-heading-1 font-header'>
                Nuestros valores
              </span>
            </h2>
            <p className='f-subhead-2 text-muted-foreground text-balance mt-spacing-3'>
              Los valores de TERRAT están integrados se ven reflejados en todas sus acciones y decisiones.
            </p>
          </div>
          <div className='cols-container gap-y-gutter mt-spacing-6'>
            {values.map((item, key) => (
              <InfoCard className='w-6-cols sm:w-8-cols lg:w-4-cols' card={item} key={key} />
            )
            )}
          </div>
          <div className='w-full justify-center mt-spacing-6 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
          </div>
        </section>
        <section className='container-sm py-spacing-9 space-y-12'>
          <div>
            <h2 className='f-display-3 font-header text-center'>
              Nuestra historia
            </h2>
          </div>
          {history.map((historyItem, key) => (
            <div className='space-y-5' key={key}>
              <p className='f-heading-2'>
                {historyItem.title}
              </p>
              <div className='space-y-4'>
                {typeof historyItem.description === 'string'
                  ? (
                    <p className='f-subhead-2 text-muted-foreground'>
                      {historyItem.description}
                    </p>
                    )
                  : (
                      historyItem.description && historyItem.description.map((item, key) => (
                        <div className='space-y-4' key={key}>
                          <p className='f-subhead-2 text-muted-foreground' key={key}>
                            {item}
                          </p>
                        </div>
                      ))
                    )}
              </div>
            </div>
          ))}
          <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
          </div>
        </section>
        <Icons.Doodle className='absolute -top-[1%] sm:-top-[6%] 2xl:-top-[12%] -right-[16%] sm:-right-[16%] 2xl:-right-[10%] fill-accent w-screen 2xl:w-[60vw] h-auto opacity-10 -z-10' />
        <Icons.Doodle className='absolute -bottom-[1%] sm:-bottom-[6%] 2xl:-bottom-[12%] -left-[16%] sm:-left-[16%] 2xl:-left-[10%] fill-accent w-screen 2xl:w-[60vw] h-auto opacity-10 -z-10' />
      </div>
    </>
  )
}
