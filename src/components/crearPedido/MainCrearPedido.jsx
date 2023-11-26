import FormCrearPedido from '@/components/crearPedido/FormCrearPedido'
import MosaicoCrearPedido from './MosaicoCrearPedido'

const MainCreaPedido = () => {
  return (
            <div className="relative h-screen">
                <div className="absolute top-0 left-0 z-40 w-screen h-full pt-20">
                    <div className="flex flex-col md:flex-row">
                        <MosaicoCrearPedido />
                        <div className="w-4/6 hidden md:flex justify-center">
                            <p className=" text-white text-xs font-extralight w-2/3 mt-24 bg-black bg-opacity-80 h-min px-3 py-3 rounded-lg shadow-md shadow-black">
                                Es importante recordar que todas las órdenes
                                deben ser hechas con 48hrs de anticipación a la
                                entrega, si requieres tu pedido en antes de
                                48hrs comunícate al: (43) 66 85 28 12.
                            </p>
                        </div>
                        <FormCrearPedido />
                    </div>
                </div>
                <div className="absolute z-20 bg-gradient-to-r from-black opacity-80 from-10%  w-full h-full"></div>
                <div className="absolute z-10 bg-[url('../../public/assets/imgs/bg-hacer-pedido.jpg')] w-full h-full bg-no-repeat bg-cover "></div>
            </div>
  )
}

export default MainCreaPedido
