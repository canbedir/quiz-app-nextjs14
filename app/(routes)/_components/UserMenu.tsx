"use client"
import Link from 'next/link';
import path from 'path'
import React, { useState } from 'react'
import { CgMenu } from "react-icons/cg";


const UserMenu = () => {

    const [openUserMenu, setOpenUserMenu] = useState(false);

    const useMenuHandler  = () =>{
        setOpenUserMenu(!openUserMenu)
    }

    const links = [
        {name:"Stats", path:"/stats"},
        {name:"Leaderboards", path:"/leaderboards"}
    ]

  return (
    <div className='text-xl mt-1 cursor-pointer p-2' onMouseEnter={()=>setOpenUserMenu(true)} onMouseLeave={()=>setOpenUserMenu(false)}>

        <div className='relative'>

            <CgMenu className='text-mycolor-300'/>
            
            {openUserMenu &&(
                <ul className='absolute text-sm bg-mycolor-400 z-50 top-7 left-[-80px] p-4 text-white rounded-lg'>
                    
                    {links.map((link, index)=>
                        <Link href={link.path} key={index} onClick={()=>setOpenUserMenu(false)}>

                            <li className='hover:underline p-3'>
                                {link.name}
                            </li>

                        </Link>
                    )}

                </ul>
            )}

        </div>

    </div>
  )
}

export default UserMenu