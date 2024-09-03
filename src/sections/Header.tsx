"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo/Logo.svg'
import { AnimatedHamburgerMenu } from '@/components/AnimatedHamburgerMenu'

type Props = {}

export const Header = () => {
    return (
        <header className='sticky top-0'>
            <div className='flex items-center justify-between px-8 py-3 border'>
                <Image src={Logo} alt='logo' height={30} width={30} />
                <nav className='hidden md:block'>
                    <a href='' className=''>Leslie Kodjoe</a>
                </nav>
                <AnimatedHamburgerMenu/>
            </div>
        </header>
    )
}