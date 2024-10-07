"use client"
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animationPage'

import React from 'react'

type Props = {
    href: string
    label: string
}

const TransitionLink = ({href, label}: Props) => {
    const router =  useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if(pathname != href){
            animatePageOut(href, router)
        }
    }

  return (
    <button className='text-xl text-neutral-900 hover:text-neutral-600' onClick={handleClick}>
        {label}
    </button>
  )
}

export default TransitionLink