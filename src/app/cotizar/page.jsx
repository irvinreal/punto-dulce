import Navbar from "@/components/Navbar";

export default function CrearPedido() {
    return (
        <main className="relative h-screen">
                <div className="absolute top-0 left-0 z-40 w-screen"><Navbar /></div>
                <div className="absolute z-20 bg-gradient-to-r from-gray-300 from-10%  w-full h-full"></div>
                <div className="absolute z-10 bg-[url('../../public/assets/imgs/bg-hacer-pedido.jpg')] w-full h-full bg-no-repeat bg-cover "></div>
        </main>
    );
}