'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classNames from 'classnames';


const NavBar = () => {
  const curPath=  usePathname()

    const links=[
        {
            label: 'Dashboard',
            href:"/"
        },
        {
            label: 'Issues',
            href:"/issues"
        }
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/">
        <AiFillBug className='text-3xl'/>
      </Link>
      <ul className='flex space-x-6'>
        {
            links.map((link,index)=>{
                return(
                    <>
                    <li key={index}>
                    <Link href={link.href} className={classNames({
                        'text-zinc-900':curPath===link.href,
                        'text-zinc-400':curPath!==link.href,
                        'hover:text-zinc-900 transition-colors':true
                    
                    })}>{link.label}</Link>
                    </li>
                    </>
                )
            })
        }
     
      </ul>
    </nav>
  )
}

export default NavBar
