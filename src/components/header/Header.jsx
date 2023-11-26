'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import CloseBtnMobile from './CloseBtn-mobile'
import ContactLinks from './ContactLinks'
import LogoNavbar from './LogoNavbar'
import NavLinks from './NavLinks'

function Header () {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleBtnMenu = () => {
    setOpen(!open)
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-40 w-full'>
      <div className='relative group/navbar transition-transform duration-1000 ease-in-out w-full z-50 h-16 bg-white flex justify-evenly'>
        <LogoNavbar open={open} />
        <div
          className={
            open
              ? 'w-screen h-[100dvh] absolute z-30 top-0 left-0 bg-white flex flex-col lg:flex-row  items-end justify-evenly flex-grow pe-5'
              : 'hidden lg:flex lg:flex-grow'
          }
        >
          <NavLinks handleBtnMenu={handleBtnMenu} open={open} />
          <ContactLinks open={open} />
        </div>
        <CloseBtnMobile handleBtnMenu={handleBtnMenu} open={open} />
      </div>
    </header>
  )
}

export default Header
