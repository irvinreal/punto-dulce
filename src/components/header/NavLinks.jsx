import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import imgMangaPastelera from '../../assets/imgs/manga-pastelera.png'
import imgPan from '../../assets/imgs/pan.png'
import imgPastel from '../../assets/imgs/pastel.png'

const NAV_LINKS = [
  {
    linkName: 'Inicio',
    href: '/'
  },
  {
    linkName: 'Pastelería',
    href: '/pasteleria',
    img: imgPastel
  },
  {
    linkName: 'Repostería',
    href: '/reposteria',
    img: imgMangaPastelera
  },
  {
    linkName: 'Panadería',
    href: '/panaderia',
    img: imgPan
  }
]

function NavLinks ({ open }) {
  const pathname = usePathname()

  return (
    <nav className='flex justify-center lg:flex-grow'>
      <ul
        className={
          open
            ? 'h-full flex flex-col justify-start items-end pt-10 pe-7 md:flex-row md:justify-center md:items-center gap-7 md:gap-8 md:mx-8'
            : 'hidden md:flex md:flex-row h-full justify-center items-end pb-1 gap-10'
        }
      >
        {NAV_LINKS.map(({ linkName, href, img }) => (
          <li
            className='relative flex justify-center items-center group group-hover:text-teal-500 cursor-pointer w-24 h-full border-b-2 border-transparent'
            key={linkName}
          >
            <Link
              href={href}
              className={
                pathname.endsWith(`${href}`)
                  ? 'text-teal-500 text-center relative transition ease-in duration-300 group-hover:text-teal-500 w-full h-full'
                  : 'text-gray-500 transition ease-in duration-300 group-hover:text-teal-500 text-center relative w-full h-full'
              }
            >
              {img && (
                <div
                  className={
                    pathname.endsWith(`${href}`)
                      ? 'w-full absolute bottom-0 left-0 -z-10 transition-all duration-300 ease-in-out flex justify-center -translate-x-16 md:translate-x-0 -translate-y-1 md:-translate-y-6 opacity-100'
                      : 'w-full absolute bottom-0 left-0 -z-10 flex justify-center md:transition-all md:duration-300 ease-in-out -translate-y-4 opacity-0 md:group-hover:-translate-y-6 md:group-hover:opacity-100'
                  }
                >
                  <div className='w-6 h-6 flex justify-center items-center'>
                    <Image
                      src={img}
                      alt={linkName}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              )}

              <span className='absolute bottom-0 left-0 w-full transition-transform ease-out group-hover:animate-[movingword_.3s_ease-out]'>
                {linkName}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
