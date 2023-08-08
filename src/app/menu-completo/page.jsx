import Navbar from '@/components/Navbar'
import MenuCumpleaños from '@/components/MenuCumpleaños/MenuCumpleaños'
import MenuEventos from '@/components/MenuEventos/MenuEventos'
import MenuBodas from '@/components/MenuBodas/MenuBodas'

const eventos = [
  'Postres para el Día',
  'Cumpleaños',
  'Bodas',
  'Eventos grandes',
  'Gelatinas',
  'Galletas',
]

export default function MenuCompleto() {
  return (
    <div>
      <section className='relative'>
        <Navbar />
        <div className='bg-gradient-to-r from-teal-300 from-10%  w-full h-90vh flex flex-row justify-start items-center gap-8'>
          <div className='w-2/5'>
            <h1 className='px-20 text-white ms-10'>
              <span className='text-4xl block'>Variedad</span>
              <span className=' text-center text-xl'>para tus eventos</span>
            </h1>
          </div>
          <div className='bg-teal-200 rounded-md shadow-lg mt-10'>
            <div className='text-gray-600 font-bold px-24 py-16 text-3xl shadow-inner group'>
              {eventos.map((evento) => (
                <li
                  key={evento}
                  className='list-none animate-bounce transition-all ease-in-out duration-500 hover:animate-none hover:bg-gray-800 hover:text-white px-4 py-1 rounded-full cursor-pointer delay-100 my-2'
                >
                  {evento}
                </li>
              ))}
              <h6 className='text-sm text-end tracking-wider'>y más..</h6>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen'>
        <MenuCumpleaños />
        <MenuEventos />
        <MenuBodas />
      </section>
    </div>
  )
}
