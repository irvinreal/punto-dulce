import Link from 'next/link'
import Image from 'next/image'
import ThreeObjects from './ThreeObjects'
import cotizar from '../../../public/assets/imgs/bienvenida/ticket.svg'
import personalizar1 from '../../../public/assets/imgs/bienvenida/personalizar1.png'
import personalizar2 from '../../../public/assets/imgs/bienvenida/personalizar2.png'
import personalizar3 from '../../../public/assets/imgs/bienvenida/personalizar3.png'

const PresentacionHeader = () => {
  return (
    <div className='h-full md:h-screen flex flex-col w-full'>
      <ThreeObjects />
      <div className='h-full flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20 my-20 md:mt-28'>
        <Link
          className='w-96 flex flex-col items-center justify-center group'
          href='/crear-pedido'
        >
          <div className='flex gap-4'>
            <div className='h-12 w-12 md:h-16 md:w-16 my-2 relative text-center transition-all duration-200 ease-in-out group-hover:h-24 group-hover:w-24 group-hover:saturate-200'>
              <Image
                src={personalizar1}
                alt={'PERSONALIZA TU PEDIDO'}
                fill
                sizes='100'
                style={{ objectFit: 'cover' }}
                className='shadow-md shadow-gray-300 transition-all duration-200 ease-in-out group-hover:shadow-teal-300 rounded-xl group-hover:-translate-y-10'
              />
            </div>
            <div className='h-12 w-12 md:h-16 md:w-16 my-2 relative text-center transition-all duration-200 ease-in-out group-hover:h-24 group-hover:w-24 group-hover:saturate-200'>
              <Image
                src={personalizar2}
                alt={'PERSONALIZA TU PEDIDO'}
                fill
                sizes='100'
                style={{ objectFit: 'cover' }}
                className='shadow-md shadow-gray-300 transition-all duration-200 ease-in-out group-hover:shadow-teal-300 rounded-xl group-hover:-translate-y-10'
              />
            </div>
            <div className='h-12 w-12 md:h-16 md:w-16 my-2 relative text-center transition-all duration-200 ease-in-out group-hover:h-24 group-hover:w-24 group-hover:saturate-200'>
              <Image
                src={personalizar3}
                alt={'PERSONALIZA TU PEDIDO'}
                fill
                sizes='100'
                style={{ objectFit: 'cover' }}
                className='shadow-md shadow-gray-300 transition-all duration-200 ease-in-out group-hover:shadow-teal-300 rounded-xl group-hover:-translate-y-10'
              />
            </div>
          </div>
          <h3 className='text-lg md:text-xl text-center font-semibold text-teal-400 transition-all duration-200 ease-in-out group-hover:-translate-y-9'>
            PERSONALIZA TU PEDIDO
          </h3>
          <p className='w-4/5 text-sm text-center mt-1 text-gray-400 duration-200 ease-in group-hover:-translate-y-8'>
            Personaliza de manera de ilimitada: color, formas, objetos,
            texturas, decoraciones
          </p>
        </Link>
        <Link
          className='w-96 flex flex-col items-center justify-center group'
          href='/crear-pedido'
        >
          <div className='h-16 w-20 md:h-20 md:w-28 my-2 relative text-center transition-all duration-200 ease-in-out group-hover:h-28 group-hover:w-40 group-hover:saturate-200'>
            <Image
              src={cotizar}
              alt='COTIZA EN LÍNEA'
              fill
              sizes='100'
              style={{ objectFit: 'cover' }}
              className='shadow-md shadow-gray-300 transition-all duration-200 ease-in-out group-hover:shadow-teal-300 rounded group-hover:-translate-y-10'
            />
          </div>
          <h3 className='text-lg md:text-xl text-center font-semibold text-teal-400 transition-all duration-200 ease-in-out group-hover:-translate-y-8'>
            COTIZAR
          </h3>
          <p className='w-4/5 text-sm text-center mt-1 text-gray-400 duration-200 ease-in group-hover:-translate-y-8'>
            Ajusta la cotizaciòn a tus necesidades y presupuesto
          </p>
        </Link>
        <Link
          className='w-96 flex flex-col items-center justify-center group'
          href='/menu-completo'
        >
          <div className='h-16 w-20 md:h-20 md:w-28 my-2 relative text-center transition-all duration-200 ease-in-out group-hover:h-28 group-hover:w-40 group-hover:saturate-200'>
            <Image
              src={personalizar1}
              alt='INSPIRATE CON MILES DE IDEAS'
              fill
              sizes='100'
              style={{ objectFit: 'cover' }}
              className='shadow-md shadow-gray-300 transition-all duration-200 ease-in-out group-hover:shadow-teal-300 rounded group-hover:-translate-y-10'
            />
          </div>
          <h3 className='text-lg md:text-xl text-center font-semibold text-teal-400 transition-all duration-200 ease-in-out group-hover:-translate-y-8'>
            ENCUENTRA MILES DE IDEAS
          </h3>
          <p className='w-4/5 text-sm text-center mt-1 text-gray-400 duration-200 ease-in group-hover:-translate-y-8'>
            Ideas para todo tipo de eventos
          </p>
        </Link>
      </div>
    </div>
  )
}

export default PresentacionHeader
