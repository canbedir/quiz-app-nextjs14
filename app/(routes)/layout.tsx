import React from 'react'
import Navbar from './_components/Navbar'
interface RouteLayoutProps{
    children:React.ReactNode
}

const RouteLayout = ({children}:RouteLayoutProps) => {
  return (
    <div>
        <Navbar/>
        <div className='py-5'>
            {children}
        </div>

    </div>
  )
}

export default RouteLayout