'use client'
import React from 'react'
import { Icons } from './icons'

export default function Background ({ children }: React.PropsWithChildren) {
  return (
    <div className='relative z-20 overflow-hidden'>
      {children}
      <div className='absolute inset-0 -z-10'>
        <Icons.Doodle className='absolute -top-[1%] sm:-top-[6%] 2xl:-top-[12%] -right-[16%] sm:-right-[16%] 2xl:-right-[10%] fill-accent w-screen 2xl:w-[60vw] h-auto opacity-10' />
        <Icons.Doodle className='absolute -bottom-[1%] sm:-bottom-[6%] 2xl:-bottom-[12%] -left-[16%] sm:-left-[16%] 2xl:-left-[10%] fill-accent w-screen 2xl:w-[60vw] h-auto opacity-10' />
      </div>
    </div>
  )
}
