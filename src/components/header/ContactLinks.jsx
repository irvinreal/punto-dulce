import Link from 'next/link'
import { usePathname } from 'next/navigation'

const iconPedir = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fillRule='currentColor'
    className='bi bi-arrow-right'
    viewBox='0 0 16 16'
  >
    <path
      fillRule='evenodd'
      d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
    />
  </svg>
)

const CONTACT_LINKS = [
  {
    linkName: 'Pedir',
    href: '/crear-pedido',
    icon: iconPedir
  },
  {
    linkName: 'Mis Pedidos',
    href: '/mis-pedidos'
  },
  {
    linkName: 'Contacto',
    href: '/contacto'
  }
]

function ContactLinks ({ open }) {
  const pathname = usePathname()

  return (
    <nav className='flex justify-center w-72'>
      <ul
        className={
          open
            ? 'h-full flex flex-col justify-start items-end pt-10 pe-7 md:flex-row md:justify-center md:items-center pb-1'
            : 'hidden lg:flex h-full justify-center items-end pb-1 gap-3'
        }
      >
        {CONTACT_LINKS.map(({ linkName, href, icon }) => (
          <li
            key={linkName}
            className='group relative flex justify-center items-center group-hover:text-teal-500 cursor-pointer'
          >
            <Link
              href={href}
              className={
                pathname.endsWith(`${href}`)
                  ? 'text-teal-500 mx-1 text-center relative transition ease-in duration-300 group-hover:text-teal-500 w-full h-full'
                  : 'text-gray-500 transition ease-in duration-300 group-hover:text-teal-500 mx-1 text-center relative'
              }
            >
              {icon
                ? (
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center -translate-x-12 opacity-0 transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-100 text-teal-500'>
                  {icon}
                </div>
                  )
                : null}
              <span className=''>{linkName}</span>
              <div className='w-full h-[2px]  transition-all ease-in-out duration-1000 delay-75 bg-teal-500 bg-opacity-0 group-hover:bg-opacity-100'></div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ContactLinks
