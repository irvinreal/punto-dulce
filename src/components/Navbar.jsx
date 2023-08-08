'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../public/assets/imgs/punto-dulce-green.svg'

const links = [{}]

const Navbar = (props) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleBtnMenu = () => {
    setOpen(!open)
  }
  return (
    <div className='fixed top-0 left-0 z-50 w-screen'>
      <nav
        className={
          open
            ? 'bg-white text-sm h-screen sm:h-14 relative'
            : 'h-14 bg-white relative'
        }
      >
        <div className='absolute '>
          <Link href={'/'}>
            <div className='flex items-center group'>
              <div className='relative w-20 h-20 me-1 ms-16 bg-white rounded-full'>
                <Image
                  src={Logo}
                  alt='Logotipo'
                  fill
                  style={{ objectFit: 'cover', padding: 8 }}
                />
                <span className='text-gray-500 bg-white pb-1 w-28 block text-center text-sm z-10  absolute top-7 -left-6 ms-2 tracking-wider'>
                  Punto Dulce
                </span>
              </div>
              <div className='mb-4 ms-4 relative'>
                <span className='text-xs w-32 text-center text-teal-600 absolute z-0 text-[4px] tracking-widest -translate-x-32 transition-all ease-out duration-1000 group-hover:translate-x-0 group-hover:text-xs group-hover:tracking-normal'>
                  el punto es probarlo
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={
            open
              ? 'h-12 flex justify-end items-center px-7 border-b border-gray-200 md:hidden'
              : 'h-12 flex justify-end items-center px-7 md:hidden'
          }
        >
          <button
            type='button'
            onClick={handleBtnMenu}
            className='flex justify-center items-center'
          >
            <span className={open ? 'hidden' : 'inline-block absolute'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-border-width fill-teal-400'
                viewBox='0 0 16 16'
              >
                <path d='M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z' />
              </svg>
            </span>
            <span
              className={
                open
                  ? 'hidden'
                  : 'inline-block'
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-border-width fill-teal-400 opacity-100'
                viewBox='0 0 16 16'
              >
                <path d='M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z' />
              </svg>
            </span>
            <span className={open ? 'inline-block' : 'hidden'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-x-lg'
                viewBox='0 0 16 16'
              >
                <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
              </svg>
            </span>
          </button>
        </div>
        <ul
          className={
            open
              ? 'h-full flex flex-col justify-start items-end pt-10 pe-7 md:flex-row md:justify-center md:items-center gap-7 md:gap-8 md:mx-8'
              : 'hidden md:flex h-full justify-center items-end pb-2 gap-8'
          }
        >
          <li className='flex justify-end items-end'>
            <Link
              href={`/`}
              className={
                pathname.endsWith('/')
                  ? 'text-gray-700 mx-6'
                  : 'text-teal-500 transition ease-in duration-300 hover:text-gray-500 mx-6'
              }
            >
              <span>Bienvenida</span>
            </Link>
          </li>
          <li className='flex justify-center'>
            <Link
              href={`/crear-pedido`}
              className={
                pathname.startsWith('/crear-pedido')
                  ? 'visited:text-gray-700 flex justify-center items-center gap-2'
                  : 'group/item text-teal-500 transition ease-in duration-300 hover:text-gray-500 flex items-center justify-center gap-2'
              }
            >
              <span className='text-center'>Crear pedido</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className={
                  pathname.startsWith('/crear-pedido')
                    ? 'bi bi-bag-fill'
                    : 'bi bi-bag-fill trasition ease-in-out duration-500 md:opacity-0 md:-translate-x-3 md:group-hover/item:opacity-100 group-hover/item:translate-x-0'
                }
                // "bi bi-bag-fill trasition ease-in-out duration-500 shadow opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                viewBox='0 0 16 16'
              >
                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z' />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href={`/menu-completo`}
              className={
                pathname.startsWith('/menu-completo')
                  ? 'visited:text-gray-700 flex items-center gap-2'
                  : 'group/item text-teal-500 transition ease-in duration-300 hover:text-gray-500 flex items-center gap-2'
              }
            >
              <span>Menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='19'
                fill='currentColor'
                className={
                  pathname.startsWith('/menu-completo')
                    ? 'bi bi-list'
                    : 'bi bi-bag-fill trasition ease-in-out duration-500 md:opacity-0 md:-translate-x-3 md:group-hover/item:opacity-100 group-hover/item:translate-x-0'
                }
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
