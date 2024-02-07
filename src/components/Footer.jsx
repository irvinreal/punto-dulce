import Image from 'next/image'
import Link from 'next/link'
import puntoDulceLogo from '../../public/assets/imgs/punto-dulce.svg'
import JuanFoto from './UI/JuanFoto'
const Footer = () => {
  return (
        <footer className="bg-white h-80 flex justify-between items-center w-full px-16 text-xs">
            <div className="w-2/5 h-2/3  flex flex-col justify-start">
                <div className="flex flex-col md:flex-row justify-start w-full text-gray-500">
                    <Image
                        src={puntoDulceLogo}
                        width={70}
                        height={70}
                        alt="punto dulce logotipo"
                        className="bg-white p-1 rounded-full me-5"
                    />
                    <div className="flex items-center mx-4 my-2">
                        <Link href={'/contacto'} className="">
                            Contacto
                        </Link>
                    </div>
                    <div className="flex items-center mx-4 my-2">
                        <Link
                            href={'/aviso-de-privacidad'}
                            className=""
                        >
                            Aviso de Privacidad
                        </Link>
                    </div>
                    <div className="flex items-center mx-4 my-2">
                        <Link
                            href={'/terminos-y-condiciones'}
                            className=""
                        >
                            Terminos y condiciones
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-2/5 h-2/3 bg-zinc-950/30 bg-opacity-30 flex flex-col items-center justify-end rounded-2xl shadow-md">

                <div className='flex items-center justify-center gap-2 border-b border-black/10 shadow-sm rounded-sm pb-2 px-2'>
                    <div className='h-24 w-24 relative'>
                        <JuanFoto />
                    </div>
                    <h3 className='h-full flex items-end'>Juan A.<br/>Talavera Valadez</h3>
                </div>
                <div>
                    <p className='py-5 px-6 text-zinc-600'>El mejor Repostrero del Mundo Entero! Sus panecillos de limon estan deliciosos! mmm...</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
