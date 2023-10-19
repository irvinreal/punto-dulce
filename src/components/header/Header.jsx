'use client'

import { useState } from 'react'
import LogoNavbar from './LogoNavbar'
import NavLinks from './NavLinks'
import ContactLinks from './ContactLinks'
import CloseBtnMobile from './CloseBtn-mobile'

function Header () {
  const [open, setOpen] = useState(false)

  const handleBtnMenu = () => {
    setOpen(!open)
  }
  return (
    <header className='fixed top-0 left-0 right-0 bottom-0 z-40 w-full'>
      <div className='relative group/navbar transition-transform duration-1000 ease-in-out w-full z-50 h-16 bg-white flex justify-evenly'>
        <LogoNavbar open={open} />
        <div
          className={
            open
              ? 'w-screen h-90vh absolute top-0 left-0 bg-white lg:flex lg:flex-row flex-col items-end justify-between flex-grow pe-5'
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
