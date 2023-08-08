import Link from 'next/link'

const SectionLinkToMenu = () => {
  return (
    <div className='w-screen relative h-90vh flex flex-col justify-center items-center bg-teal-400'>
      <div>
        <p className='relative bottom-20 text-7xl font-bold text-white mb-10 animate-bounce'>
          CONOCE NUESTRO
        </p>
      </div>
      <div className='relative overflow-hidden h-40 bg-white rounded-lg'>
        <Link
          href={'/menu-completo'}
          className='w-72 h-full text-teal-400 text-8xl px-14 rounded-lg font-extrabold group overflow-hidden'
        >
          {' '}
          <span className='bg-gray-900 w-full h-full absolute z-0 top-0 left-0 rounded-lg -translate-y-44 duration-500 group-hover:translate-y-0'></span>
          <span className='invisible'>MENU</span>
          <span className='absolute z-50 top-0 left-0 w-full h-full flex justify-center items-center duration-300 group-hover:text-white delay-200'>
            MENU
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SectionLinkToMenu
