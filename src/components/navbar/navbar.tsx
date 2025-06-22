"use client"

import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { Bell, ChevronDown, Mail, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'


const items = [
    {
        label: 'Design',
        href: '/design',
    },
    {
        label: 'My Job Posts',
        href: '/my-job-posts',
    },
    {
        label: 'My Contracts',
        href: '/my-contracts',
    },
    {
        label: 'My Collections',
        href: '/my-collections'
    },
]



export default function Navbar() {
  
  return (
    <div className='w-full border rounded-md my-1'>
        <div className="width-container flex items-center justify-between">
            <Logo />

            <div className="hidden xl:flex">
                <NavbarMenu />
            </div>

            <div className="flex items-center justify-center gap-x-4 md:gap-x-8 lg:gap-x-8 xl:gap-x-10">
                <Button className='bg-purple-800 rounded-full hover:bg-purple-600 hidden sm:block'>
                    Publish a Project
                </Button>
                <Bell className='size-4 md:size-5 lg:size-6' />
                <Mail className='size-4 md:size-5 lg:size-6' />
                <div className="flex items-center gap-2 justify-center">
                    <div className="h-6 w-6 md:w-10 md:h-10 relative">
                        <Image 
                        src="/profile-1.jpg" 
                        alt='Profile Image'
                        fill
                        className='rounded-full absolute object-cover' />
                    </div>
                    <div className="cursor-pointer">
                        <ChevronDown className='size-5'  />
                    </div>
                </div>
                
                {/* Mobile Navigation */}
                <div className="xl:hidden">
                    <Sheet>
                        <SheetTrigger className='cursor-pointer'>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent className='w-screen pl-5'>
                            <NavbarMenu />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    </div>
  )
}


type NavbarItemsProps = {
    label: string;
    href:string;
    isActive: boolean;
}

const NavbarItem = ({ 
    label,
    href,
    isActive, 
}: NavbarItemsProps) => {

    return (
        <Link 
         href={href}
         className="flex items-center justify-between text-primary dark:text-primary-foreground gap-1 text-sm ">
            <p>{label}</p>
            <span className={cn('hidden pt-1/2', isActive && 'block')}>
                <ChevronDown className='size-5'  />
            </span>
        </Link>
    )
}

const NavbarMenu = () => {
    return (
        <div className=" flex xl:items-center flex-col xl:flex-row items-start justify-start xl:justify-center mt-20 gap-y-10 gap-x-10 font-semibold lg:text-5xl md:text-4xl text-3xl xl:text-base">
            {items.map((item) => (
                <NavbarItem 
                key = {item.label}
                label = {item.label} 
                href = {item.href} 
                isActive = {item.href === "/my-collections"}  />
            ))}
        </div>
    )
}