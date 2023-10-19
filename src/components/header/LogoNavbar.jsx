import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/assets/imgs/punto-dulce-green.svg'

function LogoNavbar() {
  return (
    <div className='flex justify-center w-72 animate-[wiggle_4s_ease-in-out_infinite]'>
      <Link href={'/crear-pedido'}>
        <div className='relative flex items-center justify-center group h-24 w-32'>
          <div className='absolute w-24 h-24 bg-white rounded-full z-30'>
            <Image
              src={Logo}
              alt='Logotipo'
              fill
              style={{ objectFit: 'cover', padding: 10 }}
            />
          </div>
          <div className='absolute z-50 text-gray-500 h-full flex items-center justify-center transition-colors duration-300 animate-[beatcolor_4s_ease-in-out_infinite]'>
            <span className='text-md tracking-widest'>Punto Dulce</span>
          </div>
          <div className='absolute z-10 text-gray-500 h-full w-40 flex items-center justify-center'>
            <span className='invisible bg-white w-full py-2 text-center rounded-md shadow-inner text-[1px] sm:text[4px] tracking-normal transition-all ease-out duration-1000 sm:group-hover:translate-y-20 sm:group-hover:text-xs sm:translate-x-0 group-hover:translate-x-0 group-hover:visible group-hover:shadow-inner'>
              el punto ..es probarlo
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LogoNavbar
